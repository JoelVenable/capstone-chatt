using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Models
{
    public class Message
    {
        public Guid Id { get; set; }

        public string SenderId { get; set; }
        public virtual ApplicationUser Sender { get; set; }

        public Guid? GroupId { get; set; }
        public virtual Group Group { get; set; }


        public string Text { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreateDate { get; set; }

        public Guid? ParentMessageId { get; set; }
        public virtual Message ParentMessage { get; set; }

        public virtual ICollection<Message> Thread { get; set; }

        public virtual ICollection<Reaction> Reactions { get; set; }

        public bool IsDeleted { get; set; }
    }
}
