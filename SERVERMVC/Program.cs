using AutoMapper;
using DAL;
using Microsoft.AspNetCore.Authentication.JwtBearer;

var configMapper=new MapperConfiguration(options=>{
    // créé un mapping propriété à propriété
    // Id <=> Id
    options.CreateMap<UtilisateurDAO,UtilisateurModel>().ReverseMap();
    options.CreateMap<PretDAO,PretModel>().ReverseMap();
    options.CreateMap<ObjetDAO,ObjetModel>().ReverseMap();
    options.CreateMap<PhotoDAO,PhotoModel>().ReverseMap();
});

var mapper=configMapper.CreateMapper();


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

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

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();



