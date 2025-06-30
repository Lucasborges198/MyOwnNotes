using Microsoft.AspNetCore.Mvc;
using MyOwnNotes._2_Services.DTOS;       
using MyOwnNotes._2_Services.Interfaces;


namespace MyOwnNotes.Controllers
{
   
    [ApiController]
    
    [Route("api/[controller]")]
    public class NotasController : ControllerBase 
    {
        private readonly INotaAppService _notaAppService;

        public NotasController(INotaAppService notaAppService)
        {
            _notaAppService = notaAppService;
        }


        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var notas = await _notaAppService.ListarNotasAsync();

               
                return Ok(notas);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Ocorreu um erro interno ao listar as notas." });
            }
        }


        [HttpPost]
        public async Task<IActionResult> Adicionar([FromBody] NotaDTO notaDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var notaCriada = await _notaAppService.AdicionarNotaAsync(notaDto);

                return CreatedAtAction(nameof(Get), new { id = notaCriada.Id }, notaCriada);
            }
            catch (InvalidOperationException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Ocorreu um erro interno ao adicionar a nota." });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Atualizar (int id, [FromBody] NotaDTO notaDto)
        {
            try
            {
                var notaAtualizada = await _notaAppService.AtualizarAsync(id, notaDto);
                if(notaAtualizada == null)
                {
                    return NotFound(new { message = $"Nota com ID {id} não encontrada." });
                }
                
                return Ok(notaAtualizada);

            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Buscar (int id)
        {
            var nota = await _notaAppService.BuscarporIDAsync(id);

            if(nota == null) {
                return NotFound(new { message = $"Nota com ID {id} não encontrada." });
            }

            return Ok(nota);


        }

    }
}