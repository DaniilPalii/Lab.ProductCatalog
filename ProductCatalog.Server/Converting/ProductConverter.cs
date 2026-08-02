using ProductCatalog.Server.Dtos;
using ProductCatalog.Server.Entities;

namespace ProductCatalog.Server.Converting;

public static class ProductConverter
{
	public static Product ToEntity(this AddProductDto dto, long id)
	{
		return new()
		{
			Id = id,
			Code = dto.Code.Trim(),
			Name = dto.Name.Trim(),
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
