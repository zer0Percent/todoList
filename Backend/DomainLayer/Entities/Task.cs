using System;
using System.ComponentModel.DataAnnotations;
using DomainLayer.Repository;

namespace DomainLayer
{
    public class Task: BaseClass
    {
        public new int Id { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Status { get; set; }

        public Task() { 
        }
    }
}
