namespace appNet.DTOs
{
    public class TaskDto
    {
        public Guid Id { get; set; }
        public  string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public DateTime CreationDate { get; set; }
         public bool IsComplete { get; set; }
    }
}