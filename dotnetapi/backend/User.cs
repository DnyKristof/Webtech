using MongoDB.Bson;

namespace backend
{
    public class User
    {
        public ObjectId? Id { get; set; }
        public string? Name { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }
        public string? Role { get; set; }
    }
}
