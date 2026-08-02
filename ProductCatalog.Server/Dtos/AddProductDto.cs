using System.ComponentModel.DataAnnotations;

namespace ProductCatalog.Server.Dtos;

public record AddProductDto(
	[Required]
	string Name,

	[Required]
	string Code,

	[Required]
	[Range(0, double.MaxValue)]
	decimal Price);
