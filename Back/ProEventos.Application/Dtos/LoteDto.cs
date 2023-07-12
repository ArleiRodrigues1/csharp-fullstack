using System.ComponentModel.DataAnnotations;

namespace ProEventos.Application.Dtos
{
    public class LoteDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [DisplayFormat(DataFormatString = "{0:F2}")]
        public decimal Preco { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string DataInicio { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string DataFim { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public int Quantidade { get; set; }
        
        public int EventoId { get; set; }
        public EventoDto Evento { get; set; }
    }
}