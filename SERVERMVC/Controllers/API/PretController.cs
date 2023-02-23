using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API;


[Route("API/{controller}")]
public class PretController : ControllerBase
{
    private readonly TrocDAL db;
    private readonly IMapper mapper;

    public PretController(TrocDAL db, IMapper mapper)
    {
        this.db = db;
        this.mapper = mapper;
    }

[HttpGet]
    public IEnumerable<PretModel> Get(){
           var daos=db.Prets.ToArray();
           var models = mapper.Map<IEnumerable<PretModel>>(daos);
         return models;
    }

[HttpGet("{id:guid}")]
    public object GetPret(Guid id){
        var dao=db.Prets.Find(id);
        var model= mapper.Map<PretModel>(dao);
        return model;

    }
}