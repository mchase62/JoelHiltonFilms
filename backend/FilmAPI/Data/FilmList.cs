using System.ComponentModel.DataAnnotations;

namespace FilmAPI.Data
{
    public class FilmList
    {
        [Key]
        public int FilmId { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Director { get; set; }
        public string Rating { get; set; }
    }
}