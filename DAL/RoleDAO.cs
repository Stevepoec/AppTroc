using Microsoft.AspNetCore.Identity;
namespace DAL;
public class RoleDAO : IdentityRole<Guid> {

        public RoleDAO()
    {
        this.Id=Guid.NewGuid();
    }
}