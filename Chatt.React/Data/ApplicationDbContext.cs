using Chatt.Data.Maps;
using Chatt.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Chatt.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Group> Groups { get; set; }

        public DbSet<GroupUser> GroupUsers { get; set; }

        public DbSet<Message> Messages { get; set; }

        public DbSet<Reaction> Reactions { get; set; }


        public ApplicationDbContext(
            DbContextOptions<ApplicationDbContext> options
            ) : base(options)
        {

        }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new GroupMap());
            builder.ApplyConfiguration(new GroupUserMap());
            builder.ApplyConfiguration(new MessageMap());
            builder.ApplyConfiguration(new ReactionMap());
            builder.ApplyConfiguration(new UserMap());



            builder.Entity<IdentityRole>().HasData(
                new IdentityRole
                {
                    Name = "Admin",
                    NormalizedName = "Admin".ToUpper()
                }, new IdentityRole
                {
                    Name = "ChatUser",
                    NormalizedName = "ChatUser".ToUpper()
                });


        }
    }
}
