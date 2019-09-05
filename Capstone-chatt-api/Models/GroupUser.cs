using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Models
{
    public class GroupUser
    {
        public Guid Id { get; set; }

        public Guid GroupId { get; set; }

        public virtual Group Group { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreateDate { get; set; }



        public DateTime LastActive { get; set; }
    }
}
