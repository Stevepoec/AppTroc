using System.ComponentModel.DataAnnotations;

namespace DAL
{

    // Cette classe va générer (code first) une table 
    // par défaut FilmDAO qui contient des colonne Id,Title,ReleaseDate,..
    // en utilisant Entity Framework
    public class PretDAO
    {
        public Guid Id_Pret { get; set; }=Guid.NewGuid();

        public DateTime? Date_Debut_Prevue { get; set; }
        public DateTime? Date_Fin_Prevue { get; set; }
        public bool? Acceptation { get; set; }

        public DateTime? Date_Debut_Reel { get; set; }
        public DateTime? Date_Fin_Reel { get; set; }
        public String? Condition_Recuperation { get; set; }
        public String? Condition_Retour { get; set; }

        public int Note_Emprunter { get; set; }

        public String? Commentaire_Emprunteur { get; set; }
        public int Note_Preteur { get; set; }

        public String? Commentaire_Preteur { get; set; }

        public Guid IdObjet {get;set;}
        public Guid IdPreteur {get;set;}
        public Guid IdEmprunteur {get;set;}
        public UtilisateurDAO Utilisateur { get; set; }
        public ObjetDAO Objet { get; set; }

    }
}
