using Microsoft.EntityFrameworkCore;
using FilmAPI.Models;

namespace FilmAPI.Models

{
    public class FilmDbContext : DbContext
    {
        public FilmDbContext(DbContextOptions<FilmDbContext> options) : base(options) { }

        public DbSet<Film> Movies { get; set; }
    }
}