using AutoMapper;
using ProEventos.Dominio;
using ProEventos.Application.Dtos;

namespace ProEventos.Application.helpers
{
    public class ProEventosProfile : Profile
    {
        public ProEventosProfile(){
            CreateMap<Evento, EventoDto>().ReverseMap();
        }
    }
}