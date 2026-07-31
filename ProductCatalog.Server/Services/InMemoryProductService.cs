using System.Collections.Concurrent;
using ProductCatalog.Server.Dtos;
using ProductCatalog.Server.Entities;
using ProductCatalog.Server.Mapping;

namespace ProductCatalog.Server.Services;

/// <summary>
/// An in-memory thread-safe implementation of <see cref="IProductService"/>.
/// </summary>
public class InMemoryProductService : IProductService
{
	private readonly ConcurrentDictionary<long, Product> products = new();
	private long lastId;

	public ProductDto Add(AddProductDto dto)
	{
		var id = Interlocked.Increment(ref lastId);
		var product = dto.ToEntity(id);

		products.TryAdd(id, product);

		return product.ToDto();
	}

	public List<ProductDto> Get()
	{
		return products.Values
			.Select(p => p.ToDto())
			.ToList();
	}
}