using System;
using System.Collections.Generic;
using System.Linq;

namespace DomainLayer.Repository
{
    public interface IRepository<T> where T: BaseClass
    {
        // We define here get, update and create methods
        IQueryable<T> Get();

        void Create(T entity);

        void Update(T entity);
    }
}
