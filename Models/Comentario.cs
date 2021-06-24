using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BEComentarios.Models
{
    public class Comentario
    {
        public int id { get; set; }
        [Required]
        public string titulo { get; set; }
        [Required]
        public string creador { get; set; }
        [Required]
        public string texto { get; set; }
        [Required]
        public DateTime fechaComentario { get; set; }

        internal static Task FirstOrDefault(Func<object, bool> p)
        {
            throw new NotImplementedException();
        }

        internal static Task FirstOrDefault(int id)
        {
            throw new NotImplementedException();
        }
    }
}
