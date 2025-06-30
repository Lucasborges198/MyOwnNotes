using AutoMapper;
using MyOwnNotes._2_Services.DTOS;
using MyOwnNotes.Dominio.Entidades;

namespace MyOwnNotes._2_Services.Mappers
{
    public class NotaProfile : Profile
    {
        public NotaProfile()
        {
         
            CreateMap<Nota, NotaDTO>().ReverseMap();

        
        }
    }
}