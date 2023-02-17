using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

public class ObjetModel
{
    [JsonPropertyName("id")]
    public Guid Id_Objet { get; set; } = Guid.NewGuid();
    [JsonPropertyName("no")]
    //TODO : optimiser les noms pour réseau
    public string Nom_Objet { get; set; }
    [JsonPropertyName("dc")]

    public string Description_Courte { get; set; }
    [JsonPropertyName("dl")]

    public string Descrition_Longue { get; set; }
    [JsonPropertyName("v")]
    public decimal Valeur { get; set; }
    [JsonPropertyName("idp")]
    public Guid Id_Proprietaire { get; set; }


}