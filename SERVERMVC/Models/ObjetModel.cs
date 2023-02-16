using System.ComponentModel.DataAnnotations;

public class ObjetModel
{
    public Guid Id_Objet {get; set;}=Guid.NewGuid();
    public string Nom_Objet {get; set;}
    public string Description_Courte {get; set;}
    public string Descrition_Longue {get; set;}
    public decimal Valeur { get; set; }

    public Guid Id_Proprietaire {get;set;}


}