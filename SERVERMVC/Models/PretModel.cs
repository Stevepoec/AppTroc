using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class PretModel
{

    [JsonPropertyName("id")]
    public Guid Id_Pret { get; set; } = Guid.NewGuid();
[JsonPropertyName("ddp")]
    public DateTime? Date_Debut_Prevue { get; set; }
    [JsonPropertyName("dfp")]
    public DateTime? Date_Fin_Prevue { get; set; }
    [JsonPropertyName("a")]
    public bool? Acceptation { get; set; }
[JsonPropertyName("ddr")]
    public DateTime? Date_Debut_Reel { get; set; }
    [JsonPropertyName("dfr")]
    public DateTime? Date_Fin_Reel { get; set; }
    [JsonPropertyName("crec")]
    public String? Condition_Recuperation { get; set; }
    [JsonPropertyName("cret")]
    public String? Condition_Retour { get; set; }
    [JsonPropertyName("ne")]

    public int Note_Emprunter { get; set; }
    [JsonPropertyName("ce")]

    public String? Commentaire_Emprunteur { get; set; }
    [JsonPropertyName("np")]
    public int Note_Preteur { get; set; }
[JsonPropertyName("cp")]
    public String? Commentaire_Preteur { get; set; }
[JsonPropertyName("ido")]
    public Guid Id_Objet { get; set; }
    [JsonPropertyName("ide")]
    public Guid Id_Emprunteur { get; set; }
 
}