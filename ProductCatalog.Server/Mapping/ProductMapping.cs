using ProductCatalog.Server.Dtos;
using ProductCatalog.Server.Entities;

namespace ProductCatalog.Server.Mapping;

public static class ProductMapping
{
	public static Product ToEntity(this AddProductDto dto, long id)
	{
		return new()
		{
			Id = id,
			Code = dto.Code,
			Name = dto.Name,
			Price = dto.Price,
		};
	}

	public static ProductDto ToDto(this Product entity)
	{
		return new(
			entity.Id,
			entity.Name,
			entity.Code,
			entity.Price
		);
	}
}
