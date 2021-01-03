using System;
using System.ComponentModel.DataAnnotations;

namespace PerfectChannel.WebApi.Models
{
    public class Task
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public int Status { get; set; }

        public Task()
        {
        }
    }
}
