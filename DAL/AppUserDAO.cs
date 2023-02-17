using System.ComponentModel.DataAnnotations;

namespace DAL;

public class AppUserDAO
{
    public Guid Id_Utilisateur { get; set; }
    public string Nom {get; set;}
    public string? Prenom {get; set;}
    public string? mail {get; set;}
    public string? adresse {get; set;}
    public string? telephonne {get; set;}

    public virtual ICollection<ObjetDAO> Objets { get; set; }

    public virtual UserDAO User {get;set;}

    public virtual ICollection<PretDAO> Prets { get; set; }
// public virtual ICollection<ObjetDAO> Objets { get; set; }=new HashSet<FilmDAO>();

   
}