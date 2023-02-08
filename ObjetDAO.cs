using System.ComponentModel.DataAnnotations;

namespace DAL
{
public class ObjetDAO
{
    public Guid Id {get; set;}=Guid.NewGuid();
    public string Nom_Objet {get; set;}
    public string Description_Courte {get; set;}
    public string Descrition_Longue {get; set;}
    public decimal Valeur { get; set; }
    public virtual ICollection<PhotoDAO> Photos {get;set;}
    public virtual ICollection<PretDAO> Prets {get;set;}

}


}
