using System;
using System.Linq;
using DomainLayer.Repository;
using PersistenceLayer.Repository;

namespace DomainLayer.Repository
{
    public class TaskRepository : Repository<Task>, IDisposable
    {
        public void Dispose()
        {
            
        }
    }
}
