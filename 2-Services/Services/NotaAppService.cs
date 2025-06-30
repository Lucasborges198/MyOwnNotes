using MyOwnNotes._2_Services.DTOS;
using MyOwnNotes._2_Services.Interfaces;
using MyOwnNotes._3_Dominio.Interfaces;
using MyOwnNotes.Data.Configuration;
using AutoMapper;
using MyOwnNotes.Dominio.Entidades;
using System.Linq.Expressions;
using System.Reflection.Metadata.Ecma335;

namespace MyOwnNotes._2_Services.Services
{
    public class NotaAppService : INotaAppService
    {
        private readonly INotaRepository _notaRepository;
        private readonly IMapper _mapper;

        public NotaAppService(INotaRepository notaRepository, IMapper mapper)
        {
            _notaRepository = notaRepository;
            _mapper = mapper;
        }


        public async Task<NotaDTO> AdicionarNotaAsync(NotaDTO notaDto)
        {
            try
            {
                var novaNota = _mapper.Map<Nota>(notaDto);

                novaNota.Criacao = DateTime.UtcNow;
                novaNota.UltimaModificao = null;

                await _notaRepository.AdicionarAsync(novaNota);

                var notaCriada = _mapper.Map<NotaDTO>(novaNota);

                return notaCriada;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Erro no AppService ao adicionar nota: {ex.Message}");

                throw;
            }
        }

        public async Task<NotaDTO?> AtualizarAsync(int id, NotaDTO notaDto)
        {
            try
            {
                var notaBD = await _notaRepository.BuscarporIDAsync(id);
                if (notaBD == null)
                {
                    return null;
                }

                if(notaDto.Id != 0 && notaDto.Id != id)
                {
                    throw new InvalidOperationException("O ID da nota no corpo da requisição não corresponde ao ID da URL.");
                }

                notaDto.Id = id;

                _mapper.Map(notaDto, notaBD);
                notaBD.UltimaModificao = DateTime.UtcNow;

                await _notaRepository.AtualizarAsync(notaBD);
                var atualizada = _mapper.Map<NotaDTO>(notaBD);

                return atualizada;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Erro no AppService ao atualizar nota com ID {id}: {ex.Message}");
                throw;
            }
            
        }

        public async Task<NotaDTO?> BuscarporIDAsync(int id)
        {
            try
            {
                var notaAchada = await _notaRepository.BuscarporIDAsync(id);

                if (notaAchada == null)
                {
                    Console.WriteLine($"Nota com ID {id} não encontrada no repositório.");
                    return null;
                }

                var notaReturn = _mapper.Map<NotaDTO>(notaAchada);

                return notaReturn;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Erro no AppService ao buscar nota por ID {id}: {ex.Message}");
                throw;
            }
        }

        public async Task<List<NotaDTO>> ListarNotasAsync()
        {
            try
            {
                var notasBD = await _notaRepository.ListarAsync();

                var notasDTO = _mapper.Map<List<NotaDTO>>(notasBD);

                return notasDTO;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Erro no AppService ao listar notas: {ex.Message}");

                throw;
            }

        }
    }
}
