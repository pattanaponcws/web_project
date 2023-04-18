
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
namespace server.Controllers;

[ApiController]
[Route("/api")]
public class PostController
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

   
    [HttpPost("AddPost")]
    public async Task<ActionResult<List<Menu>>> AddPost(AddCart add)
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
            var cart = new Cart();
            var menu = this._dbContext.Menus.FirstOrDefault(o=>(o.MenuId.ToString()==add.MenuId));
            cart.Menu = menu;
            cart.User = user;
            cart.Price = add.NumFood * Int32.Parse(menu.PriceFood) ;
            cart.CountFood = add.NumFood;
            _dbContext.Carts.Add(cart);
            _dbContext.SaveChanges();
            return Ok(menu);
        }
        return Ok("no found token");
    }
}