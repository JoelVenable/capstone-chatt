using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "User handle")]
        public string Handle { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreateDate { get; set; }

        public string ImageUrl { get; set; }

        public string ThumbUrl { get; set; }

        public bool IsOnline { get; set; }

        public virtual ICollection<Message> Messages { get; set; }

        public virtual ICollection<GroupUser> GroupUsers { get; set; }

        public virtual DateTime LastActive { get; set; }

        public virtual ICollection<Reaction> Reactions { get; set; }

    }
}
