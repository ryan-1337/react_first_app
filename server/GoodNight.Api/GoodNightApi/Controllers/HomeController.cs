using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace GoodNightApi.Controllers
{
    [ApiController]
    [Route("api")]
    public class HomeController : ControllerBase
    {
        [HttpGet(Name = "Home")]
        public string Get()
        {
            string version = Assembly.GetExecutingAssembly().GetName().Version.ToString();
            var currentDate = DateTime.Now;

            return "Le numéro de version est: " + version +  "\n" + "Et nous somme le : " + currentDate;
        }
    }
}