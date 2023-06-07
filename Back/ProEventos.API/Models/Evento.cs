using System;
using System.ComponentModel.DataAnnotations;

namespace ProEventos.API.Models
{
    public class Evento
    {
        [Display(Name = "Id do Evento")]
        public int? EventoId { get; set; }
        public string? Local { get; set;}
        [Display(Name = "Data do Evento")]
        public string? DataEvento { get; set; }
        public string? Tema { get; set;}
        [Display(Name = "Quantidade de Pessoas")]
        public int? QtdPessoas { get; set; }

        public string? Lote { get; set; }
        [Display(Name = "Imagem")]
        public string? ImageUrl { get; set; }

        public Evento(int eventoId, string local, string dataEvento, string tema, int qtdPessoas, string lote, string imageUrl){
            EventoId = eventoId;
            Local = local;
            DataEvento = dataEvento;
            Tema = tema;
            QtdPessoas = qtdPessoas;
            Lote = lote;
            ImageUrl = imageUrl;
        }

        public Evento()
        {
        }
    }
}