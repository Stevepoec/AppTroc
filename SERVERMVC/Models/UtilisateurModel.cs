using System.ComponentModel.DataAnnotations;

public class UtilisateurModel
{

    public Guid Id_Utilisateur { get; set; } = Guid.NewGuid();
    public string Nom { get; set; }
    public string Prenom { get; set; }
    public string mail { get; set; }
    public string adresse { get; set; }
    public string telephonne { get; set; }

    // public virtual ICollection<ObjetDAO> Objets { get; set; }=new HashSet<FilmDAO>();


}