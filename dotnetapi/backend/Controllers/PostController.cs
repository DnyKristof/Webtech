using backend.Services;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {
        private readonly IPostService _postService;
        
        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet]
        public ActionResult GetPosts()
        {
            return Ok(_postService.GetPosts());
        }
        [HttpGet("{id}")]
        public ActionResult GetPost(ObjectId id)
        {
            return Ok(_postService.GetPost(id));
        }
        [HttpPost]
        public ActionResult CreatePost(Post post)
        {
            if (post == null)
            {
                return BadRequest();
            }
            return Ok(_postService.CreatePost(post));
        }
        [HttpPut("{id}")]
        public ActionResult UpdatePost(ObjectId id, Post post)
        {
            return Ok(_postService.UpdatePost(id, post));
        }
        [HttpDelete("{id}")]
        public ActionResult DeletePost(ObjectId id)
        {
            return Ok(_postService.DeletePost(id));
        }
    }
}
