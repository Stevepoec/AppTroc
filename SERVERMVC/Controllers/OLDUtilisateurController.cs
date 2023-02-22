using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class OLDUtilisateurController : Controller
{
    private readonly TrocDAL db;

    public OLDUtilisateurController(TrocDAL db)
    {
        this.db = db;
    }
}