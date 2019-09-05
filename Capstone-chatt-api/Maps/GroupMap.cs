using Capstone_chatt_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Maps
{
    public class GroupMap : IEntityTypeConfiguration<Group>
    {
        public void Configure(EntityTypeBuilder<Group> builder)
        {
            builder.HasKey(g => g.Id);

            builder.Property(g => g.Name).IsRequired();

            builder.Property(g => g.CreateDate)
              .HasDefaultValue(DateTime.UtcNow)
              .ValueGeneratedOnAdd();

            builder.Property(g => g.IsActive)
                .HasDefaultValue(true);

            builder.Property(g => g.IsPrivate)
                .HasDefaultValue(false);

            builder.HasMany(g => g.GroupUsers)
                .WithOne(gu => gu.Group)
                .HasForeignKey(gu => gu.GroupId)
                .OnDelete(DeleteBehavior.Cascade);


            builder.HasMany<Message>(g => g.Messages)
                .WithOne(m => m.Group)
                .HasForeignKey(m => m.GroupId)
                .OnDelete(DeleteBehavior.Cascade);


        }
    }
}
