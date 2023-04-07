using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmAPI.Models;
using FilmAPI.Data;

namespace FilmAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmController : Controller
    {
        private FilmDbContext context;
        public FilmController(FilmDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Film> Get()
        {
            var x = context.Movies.ToArray();

            return x;
        }

        //public void Post(FilmList f)
        //{
        //    return context.Films.ToArray();
        //}
    }
}
