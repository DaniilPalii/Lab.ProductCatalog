using ProductCatalog.Server.Dtos;
using ProductCatalog.Server.Entities;

namespace ProductCatalog.Server.Mapping;

public static class ProductMapping
{
	public static Product ToEntity(this AddProductDto dto, Guid id)
	{
		return new Product
		{
			Id = id,
			Code = dto.Code,
			Name = dto.Name,
			Price = dto.Price,
		};
	}

	public static ProductDto ToDto(this Product entity)
	{
		return new ProductDto(
			Id: entity.Id,
			Name: entity.Name,
			Code: entity.Code,
			Price: entity.Price
		);
	}
}