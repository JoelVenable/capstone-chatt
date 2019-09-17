using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Chatt.Data;
using Chatt.Models;
using Chatt.Models.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Chatt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ApplicationDbContext _context;
        private readonly IMyUserManager _myManager;

        public UsersController(
            ApplicationDbContext context,
            UserManager<ApplicationUser> userManager,
        IMyUserManager myManager

            )
        {
            _userManager = userManager;
            _context = context;
            _myManager = myManager;
        }

        // PUT: api/Messages
        [HttpPut]
        public async Task<IActionResult> UpdateUser([FromBody] EditUserViewModel editedUser)
        {

            var user = await _myManager.GetCurrentUserAsync(HttpContext);

            user.FirstName = editedUser.FirstName;
            user.LastName = editedUser.LastName;
            user.Handle = editedUser.Handle;

            var result = await _myManager.UpdateUserAsync(user);



            return NoContent();
        }

        // GET: api/Groups
        [HttpGet]
        public async Task<ActionResult<UserViewModel>> GetMyAccount()
        {
            return await _myManager.GetCurrentUserViewModelAsync(HttpContext);

        }





    }
}