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

    public IActionResult Index(string searchText, bool json=false){
           //var p = new Pioche(); // Peut marcher mais pas bon
        // Couplage fort
        // Gestion limitée des instances

        if (searchText == null)
        {
            searchText = "";
        }
        // Recherche des résultats dans la BDD
        var daos = db.Objets.Where(c => c.Nom_Objet.Contains(searchText));
        // Je souhaite afficher les daos dans un document HTML
        // Par défuat il se toruve dans /Views/Film/Index.cshtml

        // Je transforme les objets FilmDAO en objets FilmModel
        var ObjetModels = mapper.Map<IEnumerable<ObjetModel>>(daos);
        if(json) {
            return Json(ObjetModels);
        }
        return View(ObjetModels);
    
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






}