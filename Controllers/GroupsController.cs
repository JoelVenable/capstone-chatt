using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Chatt.Data;
using Chatt.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Chatt.Models.ViewModels;

namespace Chatt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GroupsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        private readonly IMyUserManager _userManager;


        public GroupsController(ApplicationDbContext context, IMyUserManager userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/Groups
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Group>>> GetGroups()
        {
            return await _context.Groups.ToListAsync();
        }





        [HttpGet]
        [Route("/api/[controller]/mygroups")]
        public async Task<ActionResult<IEnumerable<Group>>> MyGroups()
        {
            var user = await _userManager.GetCurrentUserAsync(HttpContext);
            if (user == null) return NotFound();

            var groups = await _context.GroupUsers
                .Where(g => g.UserId == user.Id)
                .Include(g => g.Group)
                .Select(g => g.Group)
                .ToListAsync();

            return groups;


        }


        [HttpGet]
        [Route("/api/[controller]/othergroups")]
        public async Task<ActionResult<IEnumerable<Group>>> OtherGroups()
        {
            var user = await _userManager.GetCurrentUserAsync(HttpContext);
            if (user == null) return NotFound();

            var myGroups = await _context.GroupUsers
                .Where(g => g.UserId == user.Id)
                .Include(g => g.Group)
                .Select(g => g.Group)
                .ToListAsync();

            var otherGroups = await _context.Groups.Where(g => myGroups.Contains(g) == false).ToListAsync();

            return otherGroups;
        }

        [HttpGet("find")]
        public async Task<ActionResult<IEnumerable<Group>>> FindGroups([FromRoute] string q)
        {
            var groups = await _context.Groups.Where(g => g.Name.Contains(q)).ToListAsync();

            return groups;
        }



        // GET: api/Groups/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Group>> GetGroup(Guid id)
        {
            var @group = await _context.Groups
                .Include(g => g.Messages)
                .FirstOrDefaultAsync(g => g.Id == id);

            if (@group == null)
            {
                return NotFound();
            }

            return @group;
        }

        // PUT: api/Groups/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroup(Guid id, Group @group)
        {
            if (id != @group.Id)
            {
                return BadRequest();
            }

            _context.Entry(@group).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroupExists(id))
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

        // POST: api/Groups
        [HttpPost]
        public async Task<ActionResult<Group>> PostGroup(PostGroup data)
        {
            var group = new Group()
            {
                Name = data.Name,
                IsPrivate = data.IsPrivate,
                IsProtected = data.IsProtected,
                DateCreated = DateTime.UtcNow
            };
            _context.Groups.Add(group);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGroup", new { id = group.Id }, group);
        }

        // DELETE: api/Groups/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Group>> DeleteGroup(Guid id)
        {
            var @group = await _context.Groups.FindAsync(id);
            if (@group == null)
            {
                return NotFound();
            }

            _context.Groups.Remove(@group);
            await _context.SaveChangesAsync();

            return @group;
        }

        private bool GroupExists(Guid id)
        {
            return _context.Groups.Any(e => e.Id == id);
        }
    }
}
