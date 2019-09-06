using Capstone_chatt_api.GraphQL;
using GraphQL;
using GraphQL.Http;
using GraphQL.Instrumentation;
using GraphQL.Types;
using GraphQL.Validation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Capstone_chatt_api.GraphQL
{
    public class GraphQLMiddleware
    {

        private readonly RequestDelegate _next;
        private readonly GraphQLSettings _settings;
        private readonly IDocumentExecuter _executer;
        private readonly IDocumentWriter _writer;


        public GraphQLMiddleware(
            RequestDelegate next,
            GraphQLSettings settings,
            IDocumentExecuter executer,
            IDocumentWriter writer
            )
        {
            _next = next;
            _settings = settings;
            _executer = executer;
            _writer = writer;
        }

        public async Task InvokeAsync(HttpContext context, ISchema schema)
        {
            if (
                context.Request.Method.ToLower() != "post" &&
                context.Request.Path != "/graphql"
                )
            {
                await _next(context);
                return;
            }

            await ExecuteAsync(context, schema);


            

        }


        private async Task ExecuteAsync(HttpContext context, ISchema schema)
        {
            var start = DateTime.UtcNow;

            var request = Deserialize<GraphQLRequest>(context.Request.Body);

            var result = await _executer.ExecuteAsync(_ =>
            {
                _.Schema = schema;
                _.Query = request.Query;
                _.OperationName = request.OperationName;
                _.Inputs = request.Variables.ToInputs();
                _.UserContext = _settings.BuildUserContext?.Invoke(context);
                //_.ValidationRules = DocumentValidator.CoreRules().Concat(new[] { new InputValidationRule() });
                _.EnableMetrics = _settings.EnableMetrics;
                _.ExposeExceptions = _settings.ExposeExceptions;
                if (_settings.EnableMetrics)
                {
                    _.FieldMiddleware.Use<InstrumentFieldsMiddleware>();
                }
  
            });

            if (_settings.EnableMetrics)
            {
                result.EnrichWithApolloTracing(start);
            }

            await WriteResponseAsync(context, result);
        }

        private async Task WriteResponseAsync(HttpContext context, ExecutionResult result)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)(
                result.Errors?.Any() == true
                ? HttpStatusCode.BadRequest
                : HttpStatusCode.OK
                );

            await _writer.WriteAsync(context.Response.Body, result);
        }


        private static T Deserialize<T>(Stream stream)
        {
            using (var reader = new StreamReader(stream))
            {
                using (var jsonReader = new JsonTextReader(reader))
                {
                    return new JsonSerializer().Deserialize<T>(jsonReader);
                }
            }

        }

    }

    public static class GraphQLMiddlewareExtension
    {
        public static void UseGraphQLMiddleware<TSchema>(this IApplicationBuilder appBuilder) where TSchema : ISchema
        {
            appBuilder.UseMiddleware<GraphQLMiddleware>();
        }
    }
}
