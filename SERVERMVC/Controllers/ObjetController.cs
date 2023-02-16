using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class ObjetController : Controller
{
    private readonly TrocDAL db;
    private readonly IMapper mapper;

    public ObjetController(TrocDAL db, IMapper mapper)
    {
        this.db = db;
        this.mapper = mapper;
    }

    public IActionResult Index(){
           var objetsDAO=db.Objets.ToArray();
        return View();
    
    }

public IActionResult Details(Guid id)
    {
        var film = db.Objets.Find(id);
        if (film == null)
        {
            // return NotFound(); // Si je souhaite que l'utilisateur reçoive une erreur 404
            return RedirectToAction("Index");
        }
        
        var modelFilm = mapper.Map<ObjetModel>(film);
        return View(modelFilm);
    }

    [HttpGet]
    // GET /Objet/Create
    public IActionResult Create()
    {
        // Je créé un FilmModel et je peux pré-remplir certaines info
        var objet = new ObjetModel() { };
        // Passer à la vue les categories à afficher dans la liste déroulante
        // qui permet de choisir la catégorie
        // Je génère à partir de chaque catégorie la table des catégorie
        // un objet SelectListItem => text + valeur de l'id
        // ViewBag => dynamic => on peut mettre ce qu'on veut à l'interieur
        // Il sera disponible dans la vue et permettra de générer des options
        // Dans la liste déroulante
        return View(objet);
    }

    [HttpPost]
    public async Task<IActionResult> AjouterObjet(ObjetModel objet)
    {
        if (ModelState.IsValid)
        {
            // La donnée entrée est valide, je créé un DAO
            var dao = mapper.Map<ObjetDAO>(objet);

            db.Objets.Add(dao);
            await db.SaveChangesAsync();
            // Redirige l'utilisateur vers la route
            // Film/Details/(id du nouveau film)
            return RedirectToAction("Details", new { Id = dao.Id_Objet });
        }
            
        return View(objet);
    }

    [HttpGet]
    // Premier affichage de la page contenant le form
    // GET /Film/Edit/0231d80f-13b0-46b8-96cc-1f5fcd73f34b
    public IActionResult ModifierObjet(Guid id)
    {
        var objetDAO = db.Objets.Find(id);
        if (objetDAO == null)
        {
            return RedirectToAction("Index");
        }
        var objetModel = mapper.Map<ObjetModel>(objetDAO);
        //ViewBag.IdCategorie = db.Categories.OrderBy(c => c.Nom)
         //.Select(c => new SelectListItem(c.Nom, c .Id.ToString()));
        // J'envois deux choses à ma vue
        // filmModel => données à éditer
        // ViewBag.IdCategorie => Liste des catégories pour la liste de choix déroulante
        return View(objetModel);
    }

[HttpPost]
    // HttpPost indique que c'est un retour de balise Form et pas un lien
    public IActionResult ModifierObjet(ObjetModel objetModel, Guid id)
    {
        if (ModelState.IsValid)
        {
            objetModel.Id_Objet = id;
            var objetDAO = db.Objets.Find(id);
            // Prend les valeurs des propriétés de filmModel et ca les mets
            // dans FilmDAO 
            var etatObjetDao = db.Entry(objetDAO).State; // UnChanged
                                                       // mapper.Map(filmModel,filmDAO);

            // etatFilmDao=db.Entry(filmDAO).State; // Modified
            // var etatColor=db.Entry(filmDAO).Property(c=>c.Color).IsModified; // False
            // var etatTitle=db.Entry(filmDAO).Property(c=>c.Title).IsModified; // True

            // envoyer à la bdd => UPDATE TBL_Films SET Title='' WHERE Id=...
            db.SaveChanges();
            return RedirectToAction("Details", new { Id = id });

        }
        // Si ModelState invalide => je renvois à l'utilisateur les données 
        // qu'il m'a envoyé pour edit
        //ViewBag.IdCategorie = db.Categories.OrderBy(c => c.Nom)
         //   .Select(c => new SelectListItem(c.Nom, c.Id.ToString()));
        return View(objetModel);
    }
    //TODO afficher les images de l'objet
    //TODO insérer les images de l'objet

    


}