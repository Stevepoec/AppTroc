using System.ComponentModel.DataAnnotations;

public class PhotoModel
{
    public Guid Id_Photo { get; set; } = Guid.NewGuid();

    public string Photo_Name;

    public Guid Id_Objet { get; set; }
}