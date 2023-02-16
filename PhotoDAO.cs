using System.ComponentModel.DataAnnotations;

namespace DAL
{
    public class PhotoDAO
    {
        public Guid Id_Photo {get; set;}=Guid.NewGuid();
       
        public string Photo_Name;

        public Guid Id_Objet {get;set;}

        public virtual ObjetDAO Objet{get; set;}


    }
}
