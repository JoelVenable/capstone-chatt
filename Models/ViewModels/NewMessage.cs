using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chatt.Models.ViewModels
{
    public class NewMessage
    {
        public Guid GroupId { get; set; }

        public string Text { get; set; }
    }
}
