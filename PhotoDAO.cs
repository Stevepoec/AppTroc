using System.ComponentModel.DataAnnotations;

namespace DAL
{
    public class PhotoDAO
    {
        public Guid Id {get; set;}=Guid.NewGuid();
       
        public string Photo_Name;

        public virtual ObjetDAO Objet{get; set;}


    }
}
