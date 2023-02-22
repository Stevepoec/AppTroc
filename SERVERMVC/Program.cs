using DAL;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

var configMapping = new MapperConfiguration(options =>
{
    options.CreateMap<ObjetDAO, ObjetModel>().ReverseMap();
    options.CreateMap<AppUserDAO,UtilisateurModel>().ReverseMap();
});



var builder = WebApplication.CreateBuilder(args);



// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<TrocDAL>(options =>
{
    // Je fais référence à la chaine de connection enregistrée dans le fichier de config
    options.UseSqlServer("name=TrocBDDConnectionString");
});
// Ajoute les services authentification
// en utilisant les options de base de JwtBearerDefaults
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
// Ajoute des services liés à l'authentification avec le context HRContext
// objets mis dans DI
// UserManager => objet qui gere les Utilisateurs
// RoleManager => objet qui gere les roles
// SignInManager => objet qui gere les token
builder.Services.AddIdentity<UserDAO, RoleDAO>()
    .AddEntityFrameworkStores<TrocDAL>();
// Ajout du mapper à l'injection de dépendance en mode singleton
// Demande dans un constructeur de IMapper => un seul objet retourné
builder.Services.AddSingleton<IMapper>(configMapping.CreateMapper());

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors(options =>
{
    options.AllowAnyHeader();
    options.AllowAnyMethod();
    options.AllowAnyOrigin();
});


app.UseAuthentication();

app.UseAuthorization();
app.MapControllers();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Objet}/{action=Index}/{id?}");


app.MapControllerRoute(
    name: "appUser",
    pattern: "{controller=appUser}/{action=Index}/{id?}");


app.Run();
