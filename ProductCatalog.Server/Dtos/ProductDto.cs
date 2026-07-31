namespace ProductCatalog.Server.Dtos;

public record ProductDto(
	long Id,
	string Name,
	string Code,
	decimal Price);