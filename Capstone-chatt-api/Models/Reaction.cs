using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Models
{
    public class Reaction
    {
        public Guid Id { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public Guid MessageId { get; set; }

        public virtual Message Message { get; set; }

        public char Emoji { get; set; }
    }
}
