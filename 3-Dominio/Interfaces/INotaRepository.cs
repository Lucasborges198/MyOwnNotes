using MyOwnNotes.Dominio.Entidades;

namespace MyOwnNotes._3_Dominio.Interfaces
{
    public interface INotaRepository
    {
        Task AdicionarAsync(Nota nota);
        Task<List<Nota>> ListarAsync();
        Task <Nota?>BuscarporIDAsync(int id);

        Task AtualizarAsync(Nota nota);
    }
}
