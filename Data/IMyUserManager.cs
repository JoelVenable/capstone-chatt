using System.Threading.Tasks;
using Chatt.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace Chatt.Data
{
    public interface IMyUserManager
    {
        Task<ApplicationUser> GetCurrentUserAsync(HttpContext context);
        Task<IdentityResult> UpdateUserAsync(ApplicationUser user);

    }
}