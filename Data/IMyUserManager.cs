using System.Threading.Tasks;
using Chatt.Models;
using Microsoft.AspNetCore.Http;

namespace Chatt.Data
{
    public interface IMyUserManager
    {
        Task<ApplicationUser> GetCurrentUserAsync(HttpContext context);
    }
}