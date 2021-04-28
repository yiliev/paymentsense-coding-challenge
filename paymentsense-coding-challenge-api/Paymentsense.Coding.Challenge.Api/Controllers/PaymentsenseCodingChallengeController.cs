using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Paymentsense.Coding.Challenge.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PaymentsenseCodingChallengeController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            return Ok("Paymentsense Coding Challenge!");
        }

        [HttpGet]
        [Route("/countries")]
        public ActionResult<string> Countries()
        {
            var json = "";

            using (WebClient wc = new WebClient())
            {
                json = wc.DownloadString("https://restcountries.eu/rest/v2/all");
            }

            return Ok(json);
        }
    }
}
