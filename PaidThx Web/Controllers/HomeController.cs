using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using System.IO;
using System.Web.Script.Serialization;
using System.Text;
using System.Configuration;

namespace PaidThx_Web.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult BetaSignUp(string emailAddress)
        {
            if (String.IsNullOrEmpty(emailAddress))
                return View("Index");

            var internalAPIUrl = ConfigurationManager.AppSettings["webServicesBaseUrl"];

            var betaSignUpUrl = internalAPIUrl + "/api/BetaSignUps?apiKey=BDA11D91-7ADE-4DA1-855D-24ADFE39D174";
            JavaScriptSerializer js = new JavaScriptSerializer();
            var json = js.Serialize(new
            {
                EmailAddress = emailAddress
            });

            // Create new HTTP request.
            HttpWebRequest req = (HttpWebRequest)WebRequest.Create(betaSignUpUrl);
            req.Method = "POST";
            req.ContentType = "application/json";
            byte[] postData = Encoding.ASCII.GetBytes(json);
            req.ContentLength = postData.Length;

            // Send HTTP request.
            Stream PostStream = req.GetRequestStream();
            PostStream.Write(postData, 0, postData.Length);
            HttpStatusCode statusCode = HttpStatusCode.OK;
            string statusReason = "";
            try
            {
                HttpWebResponse httpResponse = (HttpWebResponse)req.GetResponse();

                statusCode = httpResponse.StatusCode;
                statusReason = httpResponse.StatusDescription;

            }
            catch (WebException ex)
            {
                using (WebResponse response = ex.Response)
                {
                    HttpWebResponse httpResponse = (HttpWebResponse)response;
                    
                    statusCode = httpResponse.StatusCode;
                    statusReason = httpResponse.StatusDescription;

                }
            }

            if (statusCode.Equals(HttpStatusCode.Created))
            {
                return View("BetaSignUpThanks");
            }
            else if (statusCode.Equals(HttpStatusCode.BadRequest))
            {
                return View("Index");
            } 
            else
            {
                return View("Index");
            }

        }

        public ActionResult About()
        {
            return View();
        }
        public ActionResult Welcome()
        {
            return View();
        }
    }
}
