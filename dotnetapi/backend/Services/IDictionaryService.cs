using MongoDB.Bson;

namespace backend.Services
{
    public interface IDictionaryService
    {

        public IEnumerable<Dictionary> GetTranslations();
        public Dictionary GetTranslation(ObjectId id);
        public Dictionary CreateTranslation(Dictionary dictionary);
        public Dictionary UpdateTranslation(ObjectId id,Dictionary dictionary);
        public Dictionary DeleteTranslation(ObjectId id);
    }
}
