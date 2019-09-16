using Chatt.Data;
using Chatt.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Chatt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UploadController : ControllerBase
    {

        private readonly IMyUserManager _userManager;
        private readonly ApplicationDbContext _context;

      

        public UploadController(
            IMyUserManager userManager,
            ApplicationDbContext context
            )
        {
            _userManager = userManager;
            _context = context;
        }

        [HttpPost, RequestSizeLimit(512000)]
        public async Task<IActionResult> Upload()
        {
 
 
            try
            {
                var user = await _userManager.GetCurrentUserAsync(HttpContext);
                if (user == null) throw new Exception();

                var bigImg = Request.Form.Files[0];
                var avatar = Request.Form.Files[1];

                var imgDbPath = await SaveFileReturnDbPath(bigImg);
                var avatarPath = await SaveFileReturnDbPath(avatar);

                if (imgDbPath != null && avatarPath != null)
                {
                    var applicationUser = await _context.Users.FindAsync(user.Id);
                    if (applicationUser == null) throw new Exception();

                    applicationUser.ThumbUrl = avatarPath;
                    applicationUser.ImageUrl = imgDbPath;
                    await _context.SaveChangesAsync();
                    return Ok(new { imgDbPath, avatarPath });
                }
                else return BadRequest();

                
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal Server error");
            }
        }



        private async Task<string> SaveFileReturnDbPath(IFormFile file)
        {
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(folderName, fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                return dbPath;
            }
            else return null;
        }
    }
}
