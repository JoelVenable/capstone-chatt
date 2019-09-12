using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatt.Models
{
    public class Group : BaseItem
    {

        public string Name { get; set; }

        public bool IsPrivate { get; set; }

        public bool IsProtected { get; set; }

        public ICollection<GroupUser> GroupUsers { get; set; }

        public ICollection<Message> Messages { get; set; }
    }
}
