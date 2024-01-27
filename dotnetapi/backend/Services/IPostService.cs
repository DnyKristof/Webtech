using MongoDB.Bson;

namespace backend.Services
{
    public interface IPostService
    {
        public IEnumerable<Post> GetPosts();
        public Post GetPost(ObjectId id);
        public Post CreatePost(Post post);
        public Post UpdatePost(ObjectId id, Post post);
        public Post DeletePost(ObjectId id);


    }
}
