using Chatt.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Chatt.Data.Maps
{
    public class MessageMap : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            builder.HasKey(m => m.Id);

            builder.HasOne(m => m.Sender)
                .WithMany(u => u.Messages)
                .HasForeignKey(m => m.SenderId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(m => m.Group)
                .WithMany(g => g.Messages)
                .HasForeignKey(m => m.GroupId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(m => m.ParentMessage)
                .WithMany(p => p.Thread)
                .HasForeignKey(m => m.ParentMessageId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasMany(m => m.Reactions)
                .WithOne(r => r.Message)
                .HasForeignKey(r => r.MessageId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);



        }
    }
}
