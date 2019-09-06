using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Capstone_chatt_api.GraphQL
{
    public class GraphQLUserContext: Dictionary<string, object>
    {
        public ClaimsPrincipal User { get; set;  }
    }
}
