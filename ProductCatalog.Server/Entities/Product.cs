namespace ProductCatalog.Server.Entities;

public class Product
{
	public long Id { get; set; }

	public required string Name { get; set; }

	public required string Code { get; set; }

	public required decimal Price { get; set; }
}
