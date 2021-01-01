using System;
using System.Collections.Generic;
using DomainLayer;
using DomainLayer.Repository;

namespace ApplicationLayer.Services
{
    public class TaskApplicationService: ITaskApplicationService, IDisposable
    {
        public TaskApplicationService()
        {
        }

        public void Dispose()
        {
            
        }

        public IEnumerable<Task> GetTasks()
        {
            IEnumerable<Task> tasks = new List<Task>();
            using(TaskRepository repoTask = new TaskRepository())
            {
                try
                {
                    tasks = repoTask.Get();
                }
                catch
                {
                    throw new Exception("Could not retrieve all the tasks");
                }
                
            }
            return tasks;
        }

        public bool ModifyTask(Task newTask)
        {
            bool result = false;
            using(TaskRepository repoTask = new TaskRepository())
            {
                try
                {
                    Task toModify = repoTask.GetById(newTask.Id);
                    if(toModify != null)
                    {
                        toModify.Status = newTask.Status;
                        toModify.Description = newTask.Description;

                        repoTask.Update(toModify);
                        result = true;
                    }
                    
                }
                catch
                {
                    throw new Exception("Error when modifying the task");
                }
            }

            return result;
            
        }

        public bool PostTask(Task newTask)
        {
            bool result = false;
            using (TaskRepository repoTask = new TaskRepository())
            {
                try
                {
                    repoTask.Create(newTask);
                    result = true;
                }
                catch
                {
                    throw new Exception("Error when adding the given task");
                }
            }

            return result;
        }


    }
}
