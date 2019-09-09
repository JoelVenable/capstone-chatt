﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Chatt.Models
{
    public abstract class BaseItem
    {
        [Key]
        public virtual Guid Id { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.UtcNow;

    }
}
