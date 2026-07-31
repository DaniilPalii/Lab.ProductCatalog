namespace ProductCatalog.Server.Dtos;

public record AddProductDto(
	string Name,
	string Code,
	decimal Price);
