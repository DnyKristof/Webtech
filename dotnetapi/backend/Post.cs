using MongoDB.Bson;

namespace backend
{
    public class Post
    {
        public ObjectId? Id { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public string? Author { get; set; }
        public string? Subtitle { get; set; }
        public string? Date { get; set; }
    }
}
