using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Services
{
    public class DictionaryService : IDictionaryService
    {
        private readonly IMongoCollection<Dictionary> _dictionaries;
        public DictionaryService(IMongoClient client)
        {
            var database = client.GetDatabase("myscope");
            _dictionaries = database.GetCollection<Dictionary>("dictionaries");
        }
        public IEnumerable<Dictionary> GetTranslations()
        {
            return _dictionaries.Find(dictionary => true).ToList();
        }

        public Dictionary GetTranslation(ObjectId id)
        {
            return _dictionaries.Find(dictionary => true).FirstOrDefault();
        }

        public Dictionary CreateTranslation(Dictionary dictionary)
        {
            dictionary.Id = ObjectId.GenerateNewId();
            _dictionaries.InsertOne(dictionary);
            return dictionary;
        }

        public Dictionary UpdateTranslation(ObjectId id,Dictionary dictionary)
        {
            _dictionaries.ReplaceOne(dictionary => dictionary.Id == id, dictionary);
            return dictionary;
        }

        public Dictionary DeleteTranslation(ObjectId id)
        {
            var dictionary = _dictionaries.Find(dictionary => dictionary.Id == id).FirstOrDefault();
            _dictionaries.DeleteOne(dictionary => dictionary.Id == id);
            return dictionary;
        }
    }
}
