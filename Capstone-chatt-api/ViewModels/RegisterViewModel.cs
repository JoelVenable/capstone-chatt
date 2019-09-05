using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        [MinLength(4)]
        public string FirstName { get; set; }

        [Required]
        [MinLength(3)]
        public string LastName { get; set; }

        [Required]
        [MinLength(4)]
        public string Handle { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        //  One uppercase, one lowercase, one number, one special character, at least 8 characters
        [DataType(DataType.Password)]
        [MinLength(8)]
        [Display(Name = "Password")]
        public string Password { get; set; }

    }
}
