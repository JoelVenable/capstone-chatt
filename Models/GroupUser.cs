using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatt.Models
{
    public class GroupUser : BaseItem
    {
        public Guid GroupId { get; set; }
        public Group Group { get; set; }

        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        public DateTime DateActive { get; set; }
    }
}
