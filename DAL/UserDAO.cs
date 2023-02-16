using Microsoft.AspNetCore.Identity;
namespace DAL;
public class UserDAO : IdentityUser<Guid> {

    public UserDAO()
    {
        this.Id=Guid.NewGuid();
    }
}