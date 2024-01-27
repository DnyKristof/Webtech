using Microsoft.AspNetCore.Mvc;
using backend.Services;
using MongoDB.Bson;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DictionaryController : ControllerBase
    {
        private readonly IDictionaryService _dictionaryService;

        public DictionaryController(IDictionaryService dictionaryService)
        {
            _dictionaryService = dictionaryService;
        }
        [HttpGet]
        public ActionResult GetTranslations()
        {
            return Ok(_dictionaryService.GetTranslations());
        }
        [HttpGet("{id}")]
        public ActionResult GetTranslation(ObjectId id)
        {
            return Ok(_dictionaryService.GetTranslation(id));
        }
        [HttpPost]
        public ActionResult CreateTranslation(Dictionary dictionary)
        {
            if (dictionary == null)
            {
                return BadRequest();
            }
            return Ok(_dictionaryService.CreateTranslation(dictionary));
        }
        [HttpPut("{id}")]
        public ActionResult UpdateTranslation(ObjectId id, Dictionary dictionary)
        {
            return Ok(_dictionaryService.UpdateTranslation(id, dictionary));
        }
        [HttpDelete("{id}")]
        public ActionResult DeleteTranslation(ObjectId id)
        {
            return Ok(_dictionaryService.DeleteTranslation(id));
        }

    }
}
