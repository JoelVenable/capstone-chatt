using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Chatt.Data;
using Chatt.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Chatt.Models.ViewModels;

namespace Chatt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class MessagesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMyUserManager _userManager;


        public MessagesController(ApplicationDbContext context, IMyUserManager userManager)
        {
            _userManager = userManager;
            _context = context;
        }

        

        // GET: api/Messages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessages(Guid id)
        {
            //  id is actually a GROUP id.

            var messages = await _context.Messages.Where(m => m.GroupId == id).ToListAsync();

            if (messages == null)
            {
                return NotFound();
            }

            return messages;
        }

        // PUT: api/Messages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMessage([FromRoute] Guid id, [FromBody] Message message)
        {
            if (id != message.Id)
            {
                return BadRequest();
            }

            _context.Entry(message).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MessageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Messages
        [HttpPost]
        public async Task<ActionResult<Message>> PostMessage(NewMessage messageModel)
        {
            var user = await _userManager.GetCurrentUserAsync(HttpContext);
            var message = new Message()
            {
                SenderId = user.Id,
                GroupId = messageModel.GroupId,
                Text = messageModel.Text,
                IsDeleted = false
            };

            _context.Messages.Add(message);
            await _context.SaveChangesAsync();
            message.Sender = null;

            return Created("", message);
        }

        // DELETE: api/Messages/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Message>> DeleteMessage(Guid id)
        {
            var message = await _context.Messages.FindAsync(id);
            if (message == null)
            {
                return NotFound();
            }
            message.Text = null;
            message.IsDeleted = true;
            await _context.SaveChangesAsync();

            return message;
        }

        private bool MessageExists(Guid id)
        {
            return _context.Messages.Any(e => e.Id == id);
        }
    }
}
