using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PerfectChannel.WebApi.Models;

namespace PerfectChannel.WebApi
{
    public class ApplicationDbContext : DbContext
    {
        
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
        {
            IConfigurationRoot config = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.json")
                            .Build();
            options.UseSqlite(config.GetConnectionString("local"));

            
        }


        public DbSet<Task> Task { get; set; }

    }
}
