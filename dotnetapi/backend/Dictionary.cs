using MongoDB.Bson;

namespace backend
{
    public class Dictionary
    {
        public ObjectId? Id { get; set; }
        public string? Field { get; set; }
        public string? English { get; set; }
        public string? Hungarian { get; set; }
        public string? Author { get; set; }
    }
}
