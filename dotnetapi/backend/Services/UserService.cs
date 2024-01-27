using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Services
{
    public class UserService : IUserService
    {
        private readonly IMongoCollection<User> _users;
        public UserService(IMongoClient client)
        {
            var database = client.GetDatabase("myscope");
            _users = database.GetCollection<User>("users");
        }
        public IEnumerable<User> GetUsers()
        {
            return _users.Find(user => true).ToList();
        }
        public User GetUser(ObjectId id)
        {
            return _users.Find(user => user.Id == id).FirstOrDefault();
        }
        public User Login(User user)
        {
            
            var result = _users.Find(x => x.Name == user.Name && x.Password == user.Password).FirstOrDefault();

            if(result == null)
            {
                return null;
            }
            return result;
        }
        public User Register(User user)
        {
            user.Id = ObjectId.GenerateNewId();
            user.Role = "user";
            if (user.Name == "" || user.Password == ""|| user.Email == "")
            {
                return null;
            }
            _users.InsertOne(user);
            return user;
        }
        public User UpdateUser(ObjectId id, User user)
        {
            _users.ReplaceOne(x => x.Id == id, user);
            return user;
        }
        public User DeleteUser(ObjectId id)
        {
            var user = _users.Find(x => x.Id == id).FirstOrDefault();
            _users.DeleteOne(x => x.Id == id);
            return user;
        }
    }
}
