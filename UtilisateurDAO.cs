using System.ComponentModel.DataAnnotations;

namespace DAL;

public class UtilisateurDAO
{
    public Guid ID_personne { get; set; }=Guid.NewGuid();
    public string Nom {get; set;}
    public string Prenom {get; set;}
    public string mail {get; set;}
    public string adresse {get; set;}
    public string telephonne {get; set;}
    public virtual ICollection<PretDAO> Prets { get; set; }=new HashSet<FilmDAO>();

   
}