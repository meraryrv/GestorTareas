using System.ComponentModel.DataAnnotations;

namespace appNet.DTOs
{
    public class CreateTaskDto
    {
        [Required(ErrorMessage = "El título es obligatorio.")]
        [StringLength(100, ErrorMessage = "El título no puede exceder los 100 caracteres.")]
        public required string Title { get; set; }
        public required string Description { get; set; }

        [Required (ErrorMessage = "La descripcion es obligatoria.")]
        [StringLength(500)]
        public string Details { get; set; } = string.Empty;
    }
}