using System.ComponentModel.DataAnnotations;

namespace DAL
{
    public class PhotoDAO
    {
        public Guid Id_Photo {get; set;}=Guid.NewGuid();
       
        public string Photo_Name;

        public virtual ObjetDAO Objet{get; set;}


    }
}
