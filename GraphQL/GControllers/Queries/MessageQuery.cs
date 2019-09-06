using Capstone_chatt_api.Data;
using Capstone_chatt_api.Models;
using GraphQL.Conventions;
using GraphQL.Conventions.Relay;
using GraphQL.Types;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.GControllers.Queries
{
    [ImplementViewer(OperationType.Query)]
    public class MessageQuery : ObjectGraphType
    {

        [Description("Retrieve a single message by its GUID.")]
        public Task<Message> Message(ApplicationDbContext myContext, Guid id) {
            return myContext.Messages.FirstOrDefaultAsync(m => m.Id == id);
        }




    }
}
