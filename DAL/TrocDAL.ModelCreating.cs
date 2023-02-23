using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
namespace DAL
{
    public partial class TrocDAL
    {


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<AppUserDAO>(entity =>
            {

            });

            builder.Entity<PhotoDAO>(entity =>
            {
                entity.HasKey(c => c.Id_Photo);
            });

            //MODIF ObjetDAO
            builder.Entity<ObjetDAO>(entity =>
            {
                entity.HasKey(c => c.Id_Objet);

                // Spécifications de la table
                entity.ToTable("TBL_Objets")
                .HasIndex(c => c.Nom_Objet);

                // Spécifications de la colonne titre
                entity.Property(c => c.Nom_Objet)
                .HasColumnName("Nom de l'objet")
                .HasMaxLength(150)
                .IsRequired(true);

                // Spécifications de la colonne id
                entity.Property(c => c.Id_Objet)
                .HasColumnName("PK_Objet");

                // Relation 1-N avec Photo
                entity.HasMany(c => c.Photos)
                .WithOne(c => c.Objet)
                .HasForeignKey(c => c.Id_Objet).OnDelete(DeleteBehavior.NoAction);

                entity.HasMany(c => c.Prets)
                .WithOne(c => c.Objet)
                .HasForeignKey(c => c.Id_Objet).OnDelete(DeleteBehavior.NoAction);

                entity.HasOne(c => c.Proprietaire)
                    .WithMany(c => c.Objets)
                    .HasForeignKey(c => c.Id_Proprietaire).OnDelete(DeleteBehavior.NoAction);


                //MODIF CATEGORIEDAO
            });

            builder.Entity<PretDAO>(entity =>
            {
                entity.HasKey(c => c.Id_Pret);

                entity.ToTable("TBL_Pret");

                entity.Property(c => c.Id_Pret)
                .HasColumnName("PK_Pret");
            });




            // MODIF UTILISATEURDAO

            builder.Entity<AppUserDAO>(entity =>
            {
                entity.HasKey(c => c.Id_Utilisateur);
                entity.ToTable("TBL_Utilisateur");

                entity.Property(c => c.Id_Utilisateur)
                .HasColumnName("PK_Pret");

                entity.HasOne(c => c.User)
                .WithOne()
                .HasForeignKey<AppUserDAO>(c => c.Id_Utilisateur).OnDelete(DeleteBehavior.NoAction);

                entity.HasMany(c => c.Prets)
                .WithOne(c => c.Emprunteur)
                .HasForeignKey(c => c.Id_Emprunteur).OnDelete(DeleteBehavior.NoAction);

            });




            // TODO : INITIALISER LA BDD avec une ID unique entre compte et user comme HR
            // SEED
            // Accompte, utilisateur, plusieurs objets

            // SEED ACCOMPTE & lien

#region Seed Accounts
            var boss1 = new UserDAO() { UserName = "Alex", Id = Guid.NewGuid() };
            var boss2 = new UserDAO() { UserName = "Pierre", Id = Guid.NewGuid() };
            var boss3 = new UserDAO() { UserName = "Steve", Id = Guid.NewGuid() };
            var user2 = new UserDAO() { UserName = "Client", Id = Guid.NewGuid() };

            boss1.SecurityStamp = DateTime.Now.ToLongDateString();
            boss2.SecurityStamp = DateTime.Now.ToLongDateString();
            boss3.SecurityStamp = DateTime.Now.ToLongDateString();
            user2.SecurityStamp = DateTime.Now.ToLongDateString();

            var passwordHasher = new PasswordHasher<UserDAO>();
            // j'enregistre le hash du mot de passe dans boss
            var hashed1 = passwordHasher.HashPassword(boss1, "Azerty1!");
            var hashed2 = passwordHasher.HashPassword(boss2, "Azerty1!");
            var hashed3 = passwordHasher.HashPassword(boss3, "Azerty1!");
            var hashed4 = passwordHasher.HashPassword(user2, "Client!");
            boss1.PasswordHash = hashed1;
            boss2.PasswordHash = hashed2;
            boss3.PasswordHash = hashed3;
            user2.PasswordHash = hashed4;



            builder.Entity<UserDAO>().HasData(boss1,boss2,boss3,user2);
#endregion
        
        
            // Ajout du role Admin
            var roleAdmin = new RoleDAO() { Name = "Admin", Id = Guid.NewGuid() };
            var roleClient = new RoleDAO() { Name = "Client", Id = Guid.NewGuid() };
            builder.Entity<RoleDAO>().HasData(roleAdmin,roleClient);

            // Ajout du boss au role Admin
            var bossInAdmin1 = new IdentityUserRole<Guid>();
            bossInAdmin1.RoleId = roleAdmin.Id;
            bossInAdmin1.UserId = boss1.Id;

            var bossInAdmin2 = new IdentityUserRole<Guid>();
            bossInAdmin2.RoleId = roleAdmin.Id;
            bossInAdmin2.UserId = boss2.Id;

            var bossInAdmin3 = new IdentityUserRole<Guid>();
            bossInAdmin3.RoleId = roleAdmin.Id;
            bossInAdmin3.UserId = boss3.Id;

            var client2InClient = new IdentityUserRole<Guid>();
            client2InClient.RoleId = roleClient.Id;
            client2InClient.UserId = user2.Id;

             builder.Entity<IdentityUserRole<Guid>>().HasData(bossInAdmin1,bossInAdmin2,bossInAdmin3,client2InClient);



          
            var client1 = new AppUserDAO(){Nom="Dupont"};
            // Ligne qui lie cet employé à son compte (UtilisateurDAO)
            client1.Id_Utilisateur = boss1.Id;

            var client2 = new AppUserDAO(){Nom="Durand"};
            // Ligne qui lie cet employé à son compte (UtilisateurDAO)
            client2.Id_Utilisateur = user2.Id;


            builder.Entity<AppUserDAO>().HasData(client1,client2);



            var objet1 = new ObjetDAO()
            {
                Id_Objet = Guid.NewGuid(),
                Nom_Objet = "tasse",
                Description_Courte = "une jolie tasse",
                Descrition_Longue = "une jolie tasse pour boire le thé",
                Valeur = 50,
                Id_Proprietaire = client1.Id_Utilisateur
            };

            var objet2 = new ObjetDAO()
            {
                Id_Objet = Guid.NewGuid(),
                Nom_Objet = "tasse 2",
                Description_Courte = "une jolie tasse",
                Descrition_Longue = "une jolie tasse pour boire le thé",
                Valeur = 50.1M,
                Id_Proprietaire = client1.Id_Utilisateur
            };

            var objet3 = new ObjetDAO()
            {
                Id_Objet = Guid.NewGuid(),
                Nom_Objet = "Ordinateur",
                Description_Courte = "une super ordi",
                Descrition_Longue = "Ceci est un ordinateur quantique surpuissant",
                Valeur = 60000,
                Id_Proprietaire = client2.Id_Utilisateur
            };



            builder.Entity<ObjetDAO>().HasData(objet1,objet2,objet3);



            // DEBUT SEED EMPRUNT


            // CREATION DES VAR avec les proprietaire {id.. = xx, ...}
            var pret1 = new PretDAO()
            {
                Id_Pret = Guid.NewGuid(),
                Date_Debut_Prevue = new DateTime(2022,02,22),
                Date_Fin_Prevue = new DateTime(2022,03,15),
                Acceptation = true,
                Date_Debut_Reel = new DateTime(2022,02,22),
                Date_Fin_Reel = new DateTime(2022,03,15),
                Condition_Recuperation = "Enlèvement chez le propriétaire",
                Condition_Retour = "Déposer chez le propriétaire",
                Note_Emprunter = 5,
                Commentaire_Emprunteur = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut placerat orci. Vel fringilla est ullamcorper eget nulla. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Ultrices eros in cursus turpis massa tincidunt dui. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Ultricies mi eget mauris pharetra et ultrices neque ornare. Nisl vel pretium lectus quam id leo in vitae turpis. Nec ullamcorper sit amet risus nullam eget felis. Congue quisque egestas diam in. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Parturient montes nascetur ridiculus mus. Nec ultrices dui sapien eget mi proin sed libero enim.",
                Note_Preteur = 5,
                Commentaire_Preteur = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut placerat orci. Vel fringilla est ullamcorper eget nulla. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Ultrices eros in cursus turpis massa tincidunt dui. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Ultricies mi eget mauris pharetra et ultrices neque ornare. Nisl vel pretium lectus quam id leo in vitae turpis. Nec ullamcorper sit amet risus nullam eget felis. Congue quisque egestas diam in. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Parturient montes nascetur ridiculus mus. Nec ultrices dui sapien eget mi proin sed libero enim.",
                Id_Objet = objet2.Id_Objet,
                Id_Emprunteur = client2.Id_Utilisateur
            };

            var pret2 = new PretDAO()
            {
                Id_Pret = Guid.NewGuid(),
                Date_Debut_Prevue = new DateTime(2022,02,22),
                Date_Fin_Prevue = new DateTime(2022,03,15),
                Acceptation = true,
                Date_Debut_Reel = new DateTime(2022,02,22),
                Date_Fin_Reel = new DateTime(2022,03,15),
                Condition_Recuperation = "Enlèvement chez le propriétaire",
                Condition_Retour = "Déposer chez le propriétaire",
                Note_Emprunter = 5,
                Commentaire_Emprunteur = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut placerat orci. Vel fringilla est ullamcorper eget nulla. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Ultrices eros in cursus turpis massa tincidunt dui. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Ultricies mi eget mauris pharetra et ultrices neque ornare. Nisl vel pretium lectus quam id leo in vitae turpis. Nec ullamcorper sit amet risus nullam eget felis. Congue quisque egestas diam in. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Parturient montes nascetur ridiculus mus. Nec ultrices dui sapien eget mi proin sed libero enim.",
                Note_Preteur = 5,
                Commentaire_Preteur = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suspendisse ultrices gravida dictum fusce ut placerat orci. Vel fringilla est ullamcorper eget nulla. Vel risus commodo viverra maecenas accumsan lacus vel facilisis. Ultrices eros in cursus turpis massa tincidunt dui. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Ultricies mi eget mauris pharetra et ultrices neque ornare. Nisl vel pretium lectus quam id leo in vitae turpis. Nec ullamcorper sit amet risus nullam eget felis. Congue quisque egestas diam in. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Parturient montes nascetur ridiculus mus. Nec ultrices dui sapien eget mi proin sed libero enim.",
                Id_Objet = objet3.Id_Objet,
                Id_Emprunteur = client1.Id_Utilisateur
            };


            // HASDATA (builder.Entity<EmpruntunDAO...(var,var,var))

            builder.Entity<PretDAO>().HasData(pret1,pret2);

            // FIN SEED EMPRUNT


        }
    }
}