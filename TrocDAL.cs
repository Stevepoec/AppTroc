using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace DAL
{

    // TODO : Rajouter le mot de passe public virtual ICollection<ObjetDAO> Objets { get; set; }=new HashSet<FilmDAO>();

public partial class TrocDAL : IdentityDbContext<UserDAO,RoleDAO,Guid>{ 
    public TrocDAL(DbContextOptions options){ this.Database.EnsureCreated();}
    
// protected override void OnConfiguring(DbContextOptionsBuilder builder){
//     base.OnConfiguring(builder);

// // builder.UseSqlServer("data source=.;initial catalog=Troc; integrated security=true;");
// }

public DbSet<PretDAO> Prets { get; set; }                          
public DbSet<ObjetDAO> Objets { get; set; }                          
public DbSet<UtilisateurDAO> Utilisateurs { get; set; }                                                 
public DbSet<PhotoDAO> Photos { get; set; }

}}