using backend.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult GetUsers()
        {
            return Ok(_userService.GetUsers());
        }
        [HttpGet("{id}")]
        public ActionResult GetUser(ObjectId id)
        {
            return Ok(_userService.GetUser(id));
        }
        [HttpPost("login")]
        public ActionResult Login(User user)
        {
            if(user ==null)
            {
                return BadRequest();
            }
            return Ok(_userService.Login(user));
        }
        [HttpPost("register")]
        public ActionResult Register(User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            
            return Ok(_userService.Register(user));
        }
        [HttpPut("{id}")]
        public ActionResult UpdateUser(ObjectId id, User user)
        {
            return Ok(_userService.UpdateUser(id, user));
        }
        [HttpDelete("{id}")]
        public ActionResult DeleteUser(ObjectId id)
        {
            return Ok(_userService.DeleteUser(id));
        }

    }
}
