using Microsoft.EntityFrameworkCore;
namespace DAL
{
public partial class TrocDal {

protected override void OnModelCreating(ModelBuilder builder){
base.OnModelCreating(builder);


//MODIF ObjetDAO
builder.Entity<ObjetDAO>(entity =>{

	// Spécifications de la table
	entity.ToTable("TBL_Objets")
	.HasIndex(c => c.Nom_Objet);

	// Spécifications de la colonne titre
	entity.Property(c => c.Nom_Objet)
	.HasColumnName("Nom de l'objet")
	.HasMaxLength(150)
	.IsRequired(true);

	// Spécifications de la colonne id
	entity.Property(c => c.Id)
	.HasColumnName("PK_Objet");

	// Relation 1-N avec Photo
	entity.HasMany(c => c.Photos)
	.WithOne(c => c.Objet)
	.HasForeignKey(c => c.Id_Objet);

	// Nom de IdCategorie dans la BDD
	entity.Property(c => c.IdCategorie).HasColumnName("PK_Categorie");
	});

//MODIF CATEGORIEDAO


builder.Entity<CategorieDAO>(entity =>
{
	entity.ToTable("TBL_Caetegories")
	.HasIndex(c => c.Nom);
	
	entity.Property(c => c.Nom)
	.HasMaxLength(150);

	entity.Property(c => c.Id)
	.HasColumnName("PK_Categorie");
	});


// INITIALISER LA BDD
// SEED

	var c1 = new CategorieDAO() { Nom = "Thriller" };
	var c2 = new CategorieDAO() { Nom = "Comédie" };
	var c3 = new CategorieDAO() { Nom = "Action" };



var f1 = new FilmDAO()
	{
	Title = "Les aventures fantastique du C# à Bordeaux",
	Color = true,
	Duration = 120,
	ReleaseDate = new DateTime(2022, 12, 4),
	IdCategorie = c1.Id
	};
var f2 = new FilmDAO()
	{
	Title = "Drive",
	Color = true,
	Duration = 120,
	ReleaseDate = new DateTime(2022, 11, 4),
	IdCategorie = c1.Id
	};
var f3 = new FilmDAO()
	{
	Title = "Lawrence d'Arabie",
	Color = true,
	Duration = 180,
	ReleaseDate = new DateTime(2022, 11, 4),
	IdCategorie = c2.Id
	};

builder.Entity<FilmDAO>().HasData(new List<FilmDAO>() { f1,f2,f3 });
}
}
}