using System;
using System.Collections.Generic;
using System.Text;

namespace Chatt.Models
{
    public class Group : BaseItem
    {

        public string Name { get; set; }

        public bool IsPrivate { get; set; }

        public ICollection<GroupUser> GroupUsers { get; set; }

        public ICollection<Message> Messages { get; set; }
    }
}
