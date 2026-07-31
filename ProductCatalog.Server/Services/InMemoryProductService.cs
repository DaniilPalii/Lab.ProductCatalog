using System.Collections.Concurrent;
using ProductCatalog.Server.Dtos;
using ProductCatalog.Server.Entities;
using ProductCatalog.Server.Mapping;

namespace ProductCatalog.Server.Services;

public class InMemoryProductService : IProductService
{
	private readonly ConcurrentDictionary<Guid, Product> products = new();

	public ProductDto Add(AddProductDto dto)
	{
		var product = dto.ToEntity(id: Guid.NewGuid());

		products.TryAdd(product.Id, product);

		return product.ToDto();
	}

	public List<ProductDto> Get()
	{
		return products.Values
			.Select(p => p.ToDto())
			.ToList();
	}
}