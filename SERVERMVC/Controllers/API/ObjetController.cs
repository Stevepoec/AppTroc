using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API;


[Route("API/{controller}")]
public class ObjetController : ControllerBase
{
    private readonly TrocDAL db;
    private readonly IMapper mapper;

    public ObjetController(TrocDAL db, IMapper mapper)
    {
        this.db = db;
        this.mapper = mapper;
    }

[HttpGet]
    public IEnumerable<ObjetModel> Get(){
           var daos=db.Objets.ToArray();
           var models = mapper.Map<IEnumerable<ObjetModel>>(daos);
         return models;

    
    }

[HttpGet("{id:guid}")]
    public object GetObjet(Guid id){
        var dao=db.Objets.Find(id);
        var model= mapper.Map<ObjetModel>(dao);
        return model;

    }


}