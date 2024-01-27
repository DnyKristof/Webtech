using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Services
{
    public class PostService : IPostService
    {
        private readonly IMongoCollection<Post> _posts;
        public PostService(IMongoClient client)
        {
            var database = client.GetDatabase("myscope");
            _posts = database.GetCollection<Post>("posts");
        }
        public IEnumerable<Post> GetPosts()
        {
            return _posts.Find(post => true).ToList();
        }
        public Post GetPost(ObjectId id)
        {
            return _posts.Find(post => post.Id == id).FirstOrDefault();
        }
        public Post CreatePost(Post post)
        {
            if (post.Title == "" || post.Content == "" || post.Subtitle == "")
            {
                return null;
            }
            post.Id = ObjectId.GenerateNewId();
            _posts.InsertOne(post);
            return post;
        }
        public Post UpdatePost(ObjectId id, Post post)
        {
            _posts.ReplaceOne(post => post.Id == id, post);
            return post;
        }
        public Post DeletePost(ObjectId id)
        {
            var post = _posts.Find(post => post.Id == id).FirstOrDefault();
            _posts.DeleteOne(post => post.Id == id);
            return post;
        }   
    }
}
