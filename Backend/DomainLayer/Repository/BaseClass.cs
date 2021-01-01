using System;
using System.ComponentModel.DataAnnotations;

namespace DomainLayer.Repository
{
    public abstract class BaseClass
    {
        [Required]
        [Key]
        public int Id { get; protected set; }
    }
}
