using Chatt.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Chatt.Models
{
    public class Message : BaseItem
    {
        public string SenderId { get; set; }
        public virtual ApplicationUser Sender { get; set; }

        [NotMapped]
        public virtual UserViewModel MessageSender { get; set; }
        public Guid GroupId { get; set; }

        public virtual Group Group { get; set; }

        public string Text { get; set; }

        public Guid? ParentMessageId { get; set; }

        public virtual Message ParentMessage { get; set; }

        public virtual ICollection<Message> Thread { get; set; }

        public virtual ICollection<Reaction> Reactions { get; set; }

        public bool IsDeleted { get; set; }

        public bool IsModified { get; set; }
    }
}
