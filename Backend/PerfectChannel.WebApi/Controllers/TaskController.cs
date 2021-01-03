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

            try
            {
                using (ApplicationDbContext dbContext = new ApplicationDbContext())
                {
                    tasks = dbContext.Task.ToList<Task>();

                }
            }
            catch (Exception ex)
            {
                // TODO: Manage exceptions with a log manager
                throw ex;
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
                catch (Exception ex)
                {
                    // TODO: Manage the error with a log manager
                    throw ex;
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
                catch (Exception ex)
                {
                    //TODO: Manage the exception with the log manager
                    throw ex;
                }
                
            }

            return result;
        }


    }
}