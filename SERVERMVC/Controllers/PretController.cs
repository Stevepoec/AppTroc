using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

public class PretController : Controller
{
    private readonly TrocDAL db;

    public PretController(TrocDAL db)
    {
        this.db = db;
    }
}