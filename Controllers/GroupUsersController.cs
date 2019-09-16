using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Chatt.Models;
using Chatt.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Web.Helpers;
using Chatt.Models.ViewModels;

namespace Chatt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class GroupUsersController : ControllerBase
    {

        private readonly ApplicationDbContext _context;
        private readonly IMyUserManager _userManager;

      


        public GroupUsersController(ApplicationDbContext context, IMyUserManager userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        // GET: api/GroupUsers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GroupUser>>> GetGroupUsers()
        {
            return await _context.GroupUsers.ToListAsync();
        }

        // GET: api/GroupUsers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GroupUser>> GetGroupUser(Guid id)
        {
            var groupUser = await _context.GroupUsers.FindAsync(id);

            if (groupUser == null)
            {
                return NotFound();
            }

            return groupUser;
        }

        // PUT: api/GroupUsers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroupUser(Guid id, GroupUser groupUser)
        {
            if (id != groupUser.Id)
            {
                return BadRequest();
            }

            _context.Entry(groupUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroupUserExists(id))
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

        // POST: api/GroupUsers
        [HttpPost]
        public async Task<IActionResult> PostGroupUser(GroupUserPost data)
        {

            var user = await _userManager.GetCurrentUserAsync(HttpContext);
            var group = await _context.Groups.FindAsync(data.GroupId);
            if (user == null || group == null)
            {
                return NotFound();
            }
            var existingGroupUser = await _context.GroupUsers
                .Where(gu => gu.UserId == user.Id && gu.GroupId == group.Id)
                .FirstOrDefaultAsync();
            if (existingGroupUser != null)
            {
                return BadRequest();
            } 
            var groupUser = new GroupUser()
            {
                GroupId = group.Id,
                UserId = user.Id,
                DateCreated = DateTime.UtcNow,
                DateActive = DateTime.UtcNow
            };
            _context.GroupUsers.Add(groupUser);
            await _context.SaveChangesAsync();
            return Ok();
        }



        // DELETE: api/GroupUsers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GroupUser>> DeleteGroupUser(Guid id)
        {
            var groupUser = await _context.GroupUsers.FindAsync(id);
            if (groupUser == null)
            {
                return NotFound();
            }

            _context.GroupUsers.Remove(groupUser);
            await _context.SaveChangesAsync();

            return groupUser;
        }

        private bool GroupUserExists(Guid id)
        {
            return _context.GroupUsers.Any(e => e.Id == id);
        }
    }
}
