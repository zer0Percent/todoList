using System;
using Microsoft.EntityFrameworkCore;
using DomainLayer;
namespace PersistenceLayer
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Task> Task { get; set; }
        public ApplicationDbContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Add here the potential relations (fluent API) between classes
            modelBuilder.Entity<Task>()
                        .HasKey(x => x.Id);
                        
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        => options
            .UseSqlite(connectionString: "Filename=/Users/alvaro/Documents/Github/todoList/Backend/PersistenceLayer/PerfectChannelDataBase.db");
            

    }
}
