using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GameOfDrones.WebApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GameOfDrones.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class PlayerController : Controller
    {
        private readonly ApplicationDbContext context;
        public PlayerController(ApplicationDbContext context)
        {
            this.context = context;
            if (!context.Players.Any())
            {
                this.context.Players.AddRange(new Player { Name = "TestPlayer1", GamesWon = 3 }, new Player { Name = "TestPlayer2", GamesWon = 2 });
                this.context.SaveChanges();
            }
        }

        // GET: api/player
        [HttpGet]
        public IEnumerable<Player> GetAll()
        {
            return context.Players.ToList();
        }

        // GET api/player/5
        [HttpGet("GetByName/{name}", Name = "GetByName")]
        public IActionResult GetByName(string name)
        {
            var item = this.context.Players.FirstOrDefault(player => player.Name == name);
            if (item == null)
            {
                return NotFound();
            }

            return new ObjectResult(item);
        }

        // GET api/player/5
        [HttpGet("{id}", Name = "GetById")]
        public IActionResult GetById(int id)
        {
            var item = this.context.Players.FirstOrDefault(player => player.Id == id);
            if (item == null)
            {
                return NotFound();
            }

            return new ObjectResult(item);
        }

        // POST api/player
        [HttpPost]
        public IActionResult Create([FromBody] Player item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            context.Players.Add(item);
            context.SaveChanges();

            return CreatedAtRoute("GetById", new { id = item.Id }, item);
        }

        // PUT api/player/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Player item)
        {
            if (item == null || item.Id != id)
            {
                return BadRequest();
            }

            var todo = context.Players.FirstOrDefault(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }

            todo.GamesWon = item.GamesWon;
            todo.Name = item.Name;

            context.Players.Update(todo);
            context.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/player/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var todo = context.Players.First(t => t.Id == id);
            if (todo == null)
            {
                return NotFound();
            }

            context.Players.Remove(todo);
            context.SaveChanges();
            return new NoContentResult();
        }
    }
}
