using Microsoft.EntityFrameworkCore;


namespace appNet.Data
{
    using Microsoft.EntityFrameworkCore;
    using appNet.Models;

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) 
        : base(options)
        {
        }

        public DbSet<TaskItems> TaskItems { get; set; }
    }
}