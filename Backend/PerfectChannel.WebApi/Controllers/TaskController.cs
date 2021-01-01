using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using ApplicationLayer.Services;
using DomainLayer;

namespace PerfectChannel.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        [HttpGet("something", Name = "something")]
        public string some()
        {
            return "algo";
        }
        // TODO: to be completed
        [HttpGet("GetTasks", Name = "GetTasks")]
        public IEnumerable<Task> GetTasks()
        {
            IEnumerable<Task> tasks = new List<Task>();
            using(TaskApplicationService taskService = new TaskApplicationService())
            {
                tasks = taskService.GetTasks();
            }

            return tasks;
        }

        [HttpPost("AddTask", Name = "AddTask")]
        public bool AddTask(Task newTask)
        {
            bool result = false;
            using(TaskApplicationService taskService = new TaskApplicationService())
            {
                result = taskService.PostTask(newTask);
            }
            return result;
        }

        [HttpPut("ModifyTask", Name = "ModifyTask")]
        public bool ModifyTask(Task taskToModify)
        {
            bool result = false;
            using(TaskApplicationService taskService = new TaskApplicationService())
            {
                result = taskService.ModifyTask(taskToModify);
            }

            return result;
        }


    }
}