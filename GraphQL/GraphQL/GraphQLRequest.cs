using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.GraphQL
{
    public class GraphQLRequest
    {
        private JObject _variables;
        public string OperationName { get; set; }
        public string Query { get; set; }

        public JObject Variables
        {
            get => _variables ?? new JObject(new { });
            set => _variables = value;
        }

    }
}
