using Microsoft.EntityFrameworkCore;
using MyOwnNotes._3_Dominio.Interfaces;
using MyOwnNotes.Dominio.Entidades;
using MyOwnNotes.Data.Configuration; 
using System; 

namespace MyOwnNotes._4_Data.Repository
{
    public class NotaRepository : INotaRepository
    {
        private readonly ContextoBanco _contexto;

        public NotaRepository(ContextoBanco contexto)
        {
            _contexto = contexto;
        }

        public async Task AdicionarAsync(Nota nota)
        {
            try
            {
                await _contexto.Notas.AddAsync(nota); 
                await _contexto.SaveChangesAsync();   
            }
            catch (DbUpdateException ex)
            {
                Console.Error.WriteLine($"Erro de atualização do banco de dados ao adicionar nota: {ex.Message}");
                throw new Exception("Erro ao adicionar a nota no banco de dados. Verifique os dados fornecidos.", ex);
            }
            catch (OperationCanceledException ex)
            {
                Console.Error.WriteLine($"Operação cancelada ao adicionar nota: {ex.Message}");
                throw new Exception("A operação para adicionar a nota foi cancelada.", ex);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Erro inesperado ao adicionar nota: {ex.Message}");
                throw new Exception("Ocorreu um erro inesperado ao adicionar a nota.", ex);
            }
        }

        public async Task AtualizarAsync(Nota nota)
        {
            try
            {
                _contexto.Notas.Update(nota);
                await _contexto.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                Console.Error.WriteLine($"Erro de concorrência ao atualizar nota: {ex.Message}");
                throw new Exception("A nota foi modificada por outro usuário. Tente novamente.", ex);
            }
        }

        public async Task<Nota?> BuscarporIDAsync(int id)
        {
            try
            {
                return await _contexto.Notas.FindAsync(id);
            }
            catch (DbUpdateException ex)
            {
                Console.Error.WriteLine($"Erro inesperado ao obter nota por ID {id}: {ex.Message}");
                throw new Exception($"Ocorreu um erro inesperado ao buscar a nota com ID {id}.", ex);
            }
        }

        public async Task<List<Nota>> ListarAsync()
        {
            try
            {
                return await _contexto.Notas.ToListAsync();
            }
            catch (OperationCanceledException ex)
            {
                Console.Error.WriteLine($"Operação cancelada ao listar notas: {ex.Message}");
                throw new Exception("A operação para listar notas foi cancelada.", ex);
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Erro inesperado ao listar notas: {ex.Message}");
                throw new Exception("Ocorreu um erro inesperado ao listar as notas.", ex);
            }
        }
    }
}