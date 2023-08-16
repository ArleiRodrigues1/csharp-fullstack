using System.ComponentModel.DataAnnotations;

namespace ProEventos.Dominio
{
    public class RedeSocial
    {
        public int? Id { get; set; }
        
        [Required(ErrorMessage = "O campo Nome é obrigatório")]
        public string? Nome { get; set; }
        public string? URL { get; set; }
        public int? EventoId { get; set; }
        public Evento? Evento { get; set; }
        public int? PalestranteId { get; set; }
        public Palestrante? Palestrante { get; set; }
    }
}