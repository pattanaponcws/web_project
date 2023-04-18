
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
namespace server.Controllers;

[ApiController]
[Route("/api")]
public class PostController: ControllerBase
{
    private readonly ILogger<CartController> _logger;
    private readonly ApplicationDbContext _dbContext;
    private readonly IHttpContextAccessor _httpContextAccessor;
    public PostController(ILogger<CartController> logger, ApplicationDbContext dbContext,IHttpContextAccessor httpContextAccessor)
    {
        _logger = logger;
        _dbContext = dbContext;
        _httpContextAccessor = httpContextAccessor;
    }

   
    [HttpPost("CreatePost")]
    public async Task<ActionResult<List<Menu>>> createPost(CreatePost detail)
    {
        
        var httpRequest = _httpContextAccessor.HttpContext.Request;
        var authorizationHeader = httpRequest.Headers["Authorization"].ToString();
            
        if (!string.IsNullOrEmpty(authorizationHeader) && authorizationHeader.StartsWith("Bearer "))
        {
            var tokenString = authorizationHeader.Substring("Bearer ".Length).Trim();
            var handler = new JwtSecurityTokenHandler();
            var token = handler.ReadJwtToken(tokenString);
            // Access the claims in the token
            var username = token.Payload["unique_name"];
            
            var user = this._dbContext.Users.FirstOrDefault(o => o.Username == username);
            var post = new Post();
            post.User=user;
            post.Status="inti";
            post.Address = detail.Address;
            post.Tel = detail.Tel;
            _dbContext.Posts.Add(post);
            _dbContext.SaveChanges();
            var post_now = this._dbContext.Posts.Include(x=>x.User).FirstOrDefault(o => (o.User.Username == username&&o.Status=="inti"));
            return Ok(post_now.PostId);
        }
        return Ok("no found token");
    }
    [HttpPost("AddPost")]
    public async Task<ActionResult<List<Menu>>> addPost(AddPost add)
    {
        var httpRequest = _httpContextAccessor.HttpContext.Request;
        var authorizationHeader = httpRequest.Headers["Authorization"].ToString();
            
        if (!string.IsNullOrEmpty(authorizationHeader) && authorizationHeader.StartsWith("Bearer "))
        {
            var tokenString = authorizationHeader.Substring("Bearer ".Length).Trim();
            var handler = new JwtSecurityTokenHandler();
            var token = handler.ReadJwtToken(tokenString);
            // Access the claims in the token
            var username = token.Payload["unique_name"];
            var user = this._dbContext.Users.FirstOrDefault(o => o.Username == username);
            var menu = this._dbContext.Menus.FirstOrDefault(o => o.MenuId.ToString() == add.Menu);
            var post = this._dbContext.Posts.FirstOrDefault(o => o.PostId.ToString() == add.PostId);
            var postmenu = new Postmenu();
            postmenu.CountFood= add.CountFood;
            postmenu.Menu = menu;
            postmenu.Post= post;
            postmenu.User = user;
            postmenu.Price = add.Price;
            _dbContext.Postmenus.Add(postmenu);
            _dbContext.SaveChanges();
            return Ok(postmenu);
        }
        return Ok("no found token");
     }
}