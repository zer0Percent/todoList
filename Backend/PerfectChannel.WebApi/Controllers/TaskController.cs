using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PerfectChannel.WebApi.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace PerfectChannel.WebApi.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowOrigin")]
    [ApiController]
    public class TaskController : ControllerBase
    {

        [HttpGet("GetTasks", Name = "GetTasks")]
        public IEnumerable<Task> GetTasks()
        {
            IEnumerable<Task> tasks = new List<Task>();
            using(ApplicationDbContext dbContext = new ApplicationDbContext())
            {
                tasks = dbContext.Task.ToList<Task>();
                
            }

            return tasks;

        }

        [HttpPost("AddTask", Name = "AddTask")]
        public bool AddTask(Task newTask)
        {
            bool result = false;
            using(ApplicationDbContext dbContext = new ApplicationDbContext())
            {
                try
                {
                    dbContext.Entry<Task>(newTask).State = EntityState.Added;
                    dbContext.Add<Task>(newTask);
                    dbContext.SaveChanges();
                    result = true;
                }
                catch
                {
                    throw new Exception("Could not add the given task");
                }

                
            }
            return result;
        }

        [HttpPut("ModifyTask", Name = "ModifyTask")]
        public bool ModifyTask(Task taskToModify)
        {
            bool result = false;
            using(ApplicationDbContext dbContext = new ApplicationDbContext())
            {
                try
                {
                    dbContext.Entry<Task>(taskToModify).State = EntityState.Modified;
                    dbContext.Update(taskToModify);
                    dbContext.SaveChanges();
                    result = true;
                }
                catch
                {
                    throw new Exception("Coult not update the given task");
                }
                
            }

            return result;
        }


    }
}