

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
namespace DAL;

public class UtilisateurController : Controller{
    private readonly SignInManager<UserDAO> signInManager;
    private readonly UserManager<UserDAO> userManager;

    // Demande d'objet Brouette ou SignInManager
    // = paramètre du constructeur
    public UtilisateurController(
        SignInManager<UserDAO> signInManager,
        UserManager<UserDAO> userManager,
        RoleManager<RoleDAO> roleManager
        )
    {

        this.signInManager = signInManager;
        this.userManager = userManager;


    }

    [HttpGet]
    // Premier affichage
    public async Task<IActionResult> Authentication(){
        return View();
    }

    // POST : Utilisateur/Authentication
    // Retour du formulaire
    [HttpPost]
    public async Task<IActionResult> Authentication(LoginModel loginModel){
        // Vérification des données envoyées
        if(!ModelState.IsValid){
            return View(loginModel);
        }

        // Recherche de l'utilisateur
     
        var user= userManager.Users.FirstOrDefault(c=>c.UserName==loginModel.UserName);
        if(user==null){
            return View(loginModel);
        }
        // Check de password
        var resultatAuthentification=await  this.signInManager.CheckPasswordSignInAsync(
                user,loginModel.Password,false);
        if(!resultatAuthentification.Succeeded){
            // Is pas bon
            return View(loginModel);
        }
        // Placer le token dans la réponse
        await this.signInManager.SignInAsync(user,true); // true => cookie persistant 
                                                        // false => cookie qui s'efface quand on ferme le navigateur
        // Redirection vers la liste des Employes
        return RedirectToAction("Index","Employe");
    }
}