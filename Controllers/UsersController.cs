using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Chatt.Data;
using Chatt.Models;
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

        public UsersController(
            ApplicationDbContext context,
            UserManager<ApplicationUser> userManager
            )
        {
            _userManager = userManager;
            _context = context;
        }
    }
}