using MongoDB.Bson;

namespace backend.Services
{
    public interface IUserService
    {
        public IEnumerable<User> GetUsers();
        public User GetUser(ObjectId id);
        public User Login(User user);
        public User Register(User user);
        public User UpdateUser(ObjectId id, User user);
        public User DeleteUser(ObjectId id);
    }
}
