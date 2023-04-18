using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models;

public class Post
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid PostId { get; set; }
    public int CountFood { get; set; }
    public int Price { get; set; }
    public User User { get; set; } = null!;
    public String Status { get; set; }
}