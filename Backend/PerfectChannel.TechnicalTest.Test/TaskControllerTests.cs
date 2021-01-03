using System.Collections.Generic;
using NUnit.Framework;
using PerfectChannel.WebApi.Controllers;
//using PerfectChannel.WebApi.Models;

using Microsoft.AspNetCore.Hosting;
using System.Net.Http;
using Microsoft.AspNetCore.TestHost;
using PerfectChannel.WebApi;
using System.Net;
using System.Threading.Tasks;

namespace PerfectChannel.TechnicalTest.Test
{
    // integration testing. Not working.
    public class TaskControllerTest
    {

        private readonly HttpClient client;

        public TaskControllerTest()
        {
            var server = new TestServer(new WebHostBuilder()
                                .UseEnvironment("Development")
                                .UseStartup<Startup>());
            client = server.CreateClient();
                                
                                
        }
        [Test]
        public async Task GetTasksTest(string method)
        {
            var request = new HttpRequestMessage(new HttpMethod("GetTasks"),
                                                 "api/task/GetTasks");
            var response = await client.SendAsync(request);

            response.EnsureSuccessStatusCode();

            Assert.Equals(HttpStatusCode.OK, response.StatusCode);
        }

        /*
        [Test]
        public void GetTasksTest()
        {
           using(TaskController controller = new TaskController() )
           {
                IEnumerable<Task> tasks = controller.GetTasks();

                Assert.AreEqual(new List(), tasks);
           } 
        }
        */
    }
}