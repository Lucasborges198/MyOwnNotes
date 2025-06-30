using MyOwnNotes._2_Services.DTOS;
using MyOwnNotes._3_Dominio.Interfaces;

namespace MyOwnNotes._2_Services.Interfaces
{
    public interface INotaAppService
    {
        Task<List<NotaDTO>> ListarNotasAsync();
        Task<NotaDTO> AdicionarNotaAsync(NotaDTO notaDto);
        Task<NotaDTO> AtualizarAsync(int id, NotaDTO notaDTO);
        Task <NotaDTO> BuscarporIDAsync(int id);
    }
}
