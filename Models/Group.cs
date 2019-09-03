using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace capstone_chatt.Models
{
    public class Group
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime CreateDate { get; set; }

        public DateTime LastActive { get; set; }

        public bool IsActive { get; set; }
    }
}
