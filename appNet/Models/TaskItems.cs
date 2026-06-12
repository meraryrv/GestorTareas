using Microsoft.EntityFrameworkCore;

namespace appNet.Models
{
public class TaskItems
{
    public Guid Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public DateTime CreationDate { get; set; }
    public bool IsComplete { get; set; }
}
}