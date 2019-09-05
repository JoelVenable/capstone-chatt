using Capstone_chatt_api.Maps;
using Capstone_chatt_api.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Message> Messages { get; set; }

        public DbSet<Group> Groups { get; set; }

        public DbSet<Reaction> Reactions { get; set; }

        public DbSet<GroupUser> GroupUsers { get; set; }

        public DbSet<ApplicationUser> Users { get; set; }

        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);


            builder.ApplyConfiguration(new MessageMap());
            builder.ApplyConfiguration(new ApplicationUserMap());
            builder.ApplyConfiguration(new GroupMap());
            builder.ApplyConfiguration(new GroupUserMap());
            builder.ApplyConfiguration(new ReactionMap());

            builder.Entity<IdentityRole>().HasData(
               new { Id = "1", Name = "Admin", NormalizedName = "ADMIN"},
               new { Id = "2", Name = "ChatUser", NormalizedName = "CHATUSER" }

                );


        }
    }
}
