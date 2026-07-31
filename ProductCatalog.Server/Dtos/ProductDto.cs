namespace ProductCatalog.Server.Dtos;

public record ProductDto(
	Guid Id,
	string Name,
	string Code,
	decimal Price);