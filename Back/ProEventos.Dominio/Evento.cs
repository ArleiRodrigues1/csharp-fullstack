using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProEventos.Dominio
{
    public class Evento
    {
        public int Id { get; set; }

        [Required]
        public string Local { get; set; }

        public DateTime? DataEvento { get; set; }
        
        [Required(ErrorMessage = "O tema é obrigatório")]
        [MaxLength(50), MinLength(4)]
        public string Tema { get; set; }

        [Display(Name = "Público")]
        public int QtdPessoas { get; set; }

        [RegularExpression(@".*\.(gif|jpe?g|bmp|png)$",ErrorMessage = "Não é uma imagem válida. (gif, jpg, jpeg, bmp ou png)")]
        public string ImagemURL { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [Phone(ErrorMessage = "O campo {0} está com número inválido")]
        public string Telefone { get; set; }

       [Required(ErrorMessage = "O campo {0} é obrigatório")]
       [Display(Name = "e-mail")]
       [EmailAddress(ErrorMessage = "É necessário ser um {0} válido")]
        public string Email { get; set; }

        public IEnumerable<Lote> Lotes { get; set; }

        public IEnumerable<RedeSocial> RedesSociais { get; set; }
        
        public IEnumerable<PalestranteEvento> PalestrantesEventos { get; set; }
    }
}