using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class UtilisateurController : Controller
{
    private readonly TrocDAL db;

    public UtilisateurController(TrocDAL db)
    {
        this.db = db;
    }
}