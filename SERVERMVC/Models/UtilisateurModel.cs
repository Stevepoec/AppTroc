using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class UtilisateurModel
{

    [JsonPropertyName("id")]
    public Guid Id_Utilisateur { get; set; } = Guid.NewGuid();

    [JsonPropertyName("nu")]
    public string Nom { get; set; }
        [JsonPropertyName("pu")]
    public string Prenom { get; set; }

        [JsonPropertyName("mu")]
    public string mail { get; set; }

        [JsonPropertyName("au")]
    public string adresse { get; set; }
        [JsonPropertyName("tu")]
    public string telephonne { get; set; }

    // public virtual ICollection<ObjetDAO> Objets { get; set; }=new HashSet<FilmDAO>();


}