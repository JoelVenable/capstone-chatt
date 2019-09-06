using Capstone_chatt_api.Models;
using GraphQL;
using GraphQL.Types;

namespace Capstone_chatt_api.GraphQL.Types
{
    [GraphQLMetadata("Message", IsTypeOf = typeof(Message))]
    public class MessageType : ObjectGraphType<Message>
    {
        public MessageType()
        {
            Field(m => m.Id).Description("The Id of the message.");
            Field(m => m.Text, nullable: true).Description("The body of the message.");
            Field(m => m.Sender).Description("The user that sent the message.");
            Field(m => m.Group).Description("The group or channel the message was posted to.");
            Field(m => m.CreateDate).Description("The timestamp the message was posted");
            Field(m => m.ParentMessage).Description("The parent message");
            Field(m => m.Reactions).Description("Emoji reactions to a message");
        }
    }
}
