using Chatt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Chatt.Data
{
    public class MyUserManager : IMyUserManager
    {
        private readonly UserManager<ApplicationUser> _userManager;



        public MyUserManager(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }


        public async Task<ApplicationUser> GetCurrentUserAsync(HttpContext context)
        {
            var identity = context.User.Identity as ClaimsIdentity;
            if (identity != null)
            {
                IEnumerable<Claim> claims = identity.Claims;
                Claim userClaim = claims.FirstOrDefault(c => c.Type == ClaimTypes.Email);

                var user = await _userManager.FindByEmailAsync(userClaim.Value);

                return user;

            }
            return null;
        }
    }
}
