using System.Windows;
using System.Collections.Generic;
using DomainLayer;

namespace ApplicationLayer.Services
{
    public interface ITaskApplicationService
    {
        /// <summary>
        /// Get a collection of tasks objects
        /// </summary>
        /// <returns>List of Tasks</returns>
        public IEnumerable<Task> GetTasks();

        /// <summary>
        /// Add new task to the data base
        /// </summary>
        /// <param name="newTask"></param>
        /// <returns>boolean indicating whether the operation was or not
        /// successfull</returns>
        public bool PostTask(Task newTask);

        /// <summary>
        /// Modify an existing Task
        /// </summary>
        /// <param name="newTask"></param>
        /// <returns>Boolean indicating whether the modification was successfull
        /// </returns>
        public bool ModifyTask(Task newTask);


    }
}
