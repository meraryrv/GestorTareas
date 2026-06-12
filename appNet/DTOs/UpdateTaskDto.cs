using System.ComponentModel.DataAnnotations;

namespace appNet.DTOs
{
    public class UpdateTaskDto
    {
        [Required]
        [StringLength (100)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [StringLength(500)]
        public string Description { get; set; } = string.Empty;

        public bool IsComplete { get; set; }
    }
}