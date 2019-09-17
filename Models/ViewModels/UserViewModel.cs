using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatt.Models.ViewModels
{
    public class UserViewModel
    {
        public string Id { get; set; }
        public DateTime DateCreated { get; set; }


        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Handle { get; set; }


        public string ImageUrl { get; set; }

        public string ThumbUrl { get; set; }

        public bool IsOnline { get; set; }

        public virtual DateTime LastActive { get; set; }


    }
}
