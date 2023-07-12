using System;
using System.ComponentModel.DataAnnotations;

namespace ProEventos.Dominio
{
    public class Lote
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }

        [DisplayFormat(DataFormatString = "{0:F2}")]
        public decimal Preco { get; set; }
        
        public DateTime? DataInicio { get; set; }

        public DateTime? DataFim { get; set; }

        [Required]
        public int Quantidade { get; set; }

        public int EventoId { get; set; }

        public Evento Evento { get; set; }
    }
}