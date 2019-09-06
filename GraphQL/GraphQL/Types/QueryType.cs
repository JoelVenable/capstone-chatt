using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace Capstone_chatt_api.GraphQL.Types
{
    public class QueryType : ObjectGraphType
    {
        public QueryType()
        {
            Name = "Query";

            Field<NonNullGraphType<StringGraphType>>(
                name: "message",
                resolve: context => "Hello from GraphQL"
                );
        }

    }
}
