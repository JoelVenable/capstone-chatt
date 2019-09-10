using System;
using System.Collections.Generic;
using System.Text;

namespace Chatt.Models
{
    public class Reaction : BaseItem
    {
        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public Guid MessageId { get; set; }

        public virtual Message Message { get; set; }

        public char Emoji { get; set; }
    }

}
