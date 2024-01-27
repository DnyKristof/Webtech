using backend.Services;
using MongoDB.Driver;

namespace backend.ServiceCollectionExtensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddMongoDb(this IServiceCollection services)
        {
            services.AddSingleton<IMongoClient>(s =>
            {
                var connectionString = "mongodb://targonca:Szeretematejetigenesakakaotis@mongo:27017";
                return new MongoClient(connectionString);
            });
        }
        public static void AddServices(this IServiceCollection services)
        {
            services.AddSingleton<IUserService, UserService>();
            services.AddSingleton<IPostService, PostService>();
            services.AddSingleton<IDictionaryService, DictionaryService>();
        }

    }
}
