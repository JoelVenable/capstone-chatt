using Capstone_chatt_api.GraphQL.Types;
using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Text;

namespace Capstone_chatt_api.GraphQL.Schemas
{
    public class MessageSchema : Schema
    {
        public MessageSchema(IDependencyResolver resolver) : base(resolver)
        {
            Query = resolver.Resolve<MessageType>();
        }
    }
}
