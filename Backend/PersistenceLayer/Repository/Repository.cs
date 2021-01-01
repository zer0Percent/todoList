using System.Linq;
using Microsoft.EntityFrameworkCore;
using DomainLayer.Repository;
using System;

namespace PersistenceLayer.Repository
{
    // We implement the interface Repository with a given generic Class T
    public class Repository<T> : IRepository<T> where T : BaseClass
    {
        private ApplicationDbContext _dbContext;
        protected DbSet<T> DbSet;

        public Repository()
        {
            this._dbContext = new ApplicationDbContext();
            this.DbSet = _dbContext.Set<T>();
        }

        public void Create(T entity)
        {

            this.DbSet.Add(entity);
            this._dbContext.SaveChanges();
        }


        public IQueryable<T> Get()
        {
  
            return this.DbSet.AsNoTracking();
            
        }

        public void Update(T entity)
        {
            this.DbSet.Attach(entity);
            this._dbContext.Entry(entity).State = EntityState.Modified;
            this._dbContext.SaveChanges();
        }

        public T GetById(int id)
        {
            return this.DbSet.Find(id);
        }
    }

}
