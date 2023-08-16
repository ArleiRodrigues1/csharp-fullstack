using AutoMapper;
using ProEventos.Dominio;
using ProEventos.Application.Dtos;

namespace ProEventos.Application.helpers
{
    public class ProEventosProfile : Profile
    {
        public ProEventosProfile(){
            CreateMap<Evento, EventoDto>().ReverseMap();
            CreateMap<Lote, LoteDto>().ReverseMap();
            CreateMap<RedeSocial, RedeSocialDto>().ReverseMap();
            CreateMap<Palestrante, PalestranteDto>().ReverseMap();
        }
    }
}