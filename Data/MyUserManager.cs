using Chatt.Models;
using Chatt.Models.ViewModels;
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

        public async Task<UserViewModel> GetCurrentUserViewModelAsync(HttpContext context)
        {
            var appUser = await GetCurrentUserAsync(context);

            var returnUser = new UserViewModel()
            {
                Id = appUser.Id,
                DateCreated = appUser.DateCreated,
                FirstName = appUser.FirstName,
                LastName = appUser.LastName,
                Handle = appUser.Handle,
                ImageUrl = appUser.ImageUrl,
                ThumbUrl = appUser.ThumbUrl,
                IsOnline = appUser.IsOnline,
                LastActive = appUser.LastActive
            };

            return returnUser;
        }


        public async Task<IdentityResult> UpdateUserAsync(ApplicationUser user)
        {
            return await _userManager.UpdateAsync(user);
        }
    }
}
