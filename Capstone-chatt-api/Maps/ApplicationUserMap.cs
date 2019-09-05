using Capstone_chatt_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Maps
{
    public class ApplicationUserMap : IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            builder.Property(u => u.FirstName)
                .IsRequired();

            builder.Property(u => u.LastName)
                .IsRequired();

            builder.Property(u => u.Handle)
                .IsRequired();

            builder.Property(u => u.CreateDate)
                .HasDefaultValue(DateTime.UtcNow)
                .ValueGeneratedOnAdd();

            builder.HasMany<Message>(u => u.Messages)
                .WithOne(m => m.Sender)
                .HasForeignKey(m => m.SenderId);

            builder.HasMany<GroupUser>(u => u.GroupUsers)
                .WithOne(gu => gu.User)
                .HasForeignKey(gu => gu.UserId);

            builder.Property(u => u.LastActive)
                .HasDefaultValue(DateTime.UtcNow)
                .ValueGeneratedOnAddOrUpdate();

            builder.HasMany(u => u.Reactions)
                .WithOne(r => r.User)
                .HasForeignKey(r => r.UserId);
        }
    }
}
