using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API;


[Route("API/{controller}")]
public class AppUserController : ControllerBase
{
    private readonly TrocDAL db;
    private readonly IMapper mapper;

    public AppUserController(TrocDAL db, IMapper mapper)
    {
        this.db = db;
        this.mapper = mapper;
    }

[HttpGet]
    public IEnumerable<UtilisateurModel> Get(){
           var daos=db.Utilisateurs.ToArray();
           var models = mapper.Map<IEnumerable<UtilisateurModel>>(daos);
         return models;
    }

[HttpGet("{id:guid}")]
    public object GetUser(Guid id){
        var dao=db.Utilisateurs.Find(id);
        var model= mapper.Map<UtilisateurModel>(dao);
        return model;

    }
}