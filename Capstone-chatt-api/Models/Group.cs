using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Models
{
    public class Group
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreateDate { get; set; }


        public ICollection<GroupUser> GroupUsers { get; set; }

        public bool IsActive { get; set; }

        public bool IsPrivate { get; set; }


        public ICollection<Message> Messages { get; set; }
    }
}
