using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace capstone_chatt.Models
{
    public class GroupUser
    {
        public Guid Id { get; set; }

        public Guid GroupId { get; set; }

        public Group Group { get; set; }

        public string UserId { get; set; }

        public ApplicationUser User { get; set; }
    }
}
