using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace capstone_chatt.Models
{
    public class Message
    {
        public Guid Id { get; set; }

        public Guid SenderId { get; set; }

        public string Text { get; set; }

        public DateTime CreateDate { get; set; }

        public Guid ParentMessageId { get; set; }

        public List<Message> Thread { get; set; }
    }
}
