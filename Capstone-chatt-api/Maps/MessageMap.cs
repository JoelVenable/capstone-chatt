using Capstone_chatt_api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone_chatt_api.Maps
{
    public class MessageMap : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            builder.HasKey(m => m.Id);

            builder.HasOne<ApplicationUser>(m => m.Sender)
                .WithMany(u => u.Messages)
                .HasForeignKey(m => m.SenderId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne<Group>(m => m.Group)
                .WithMany(g => g.Messages)
                .HasForeignKey(m => m.GroupId);

            builder.HasMany(m => m.Thread)
                .WithOne(m => m.ParentMessage)
                .HasForeignKey(m => m.ParentMessageId);

            builder.Property(m => m.Text).IsRequired();

            builder.Property(m => m.CreateDate)
                .HasDefaultValue(DateTime.UtcNow);

            builder.Property(m => m.IsDeleted)
                .HasDefaultValue(false);

            builder.HasMany(m => m.Reactions)
                .WithOne(r => r.Message)
                .HasForeignKey(r => r.MessageId);


            //HasOptional<Group>(m => m.Group)
            //    .WithMany(g => g.Messages)
            //    .HasForeignKey(m => m.GroupId);

            //HasMany(m => m.Thread)
            //    .WithOptional()
            //    .HasForeignKey(m => m.ParentMessageId);
        }
    }
}
