using ProductCatalog.Server.Dtos;

namespace ProductCatalog.Server.Services;

public interface IProductService
{
	ProductDto Add(AddProductDto dto);

	List<ProductDto> Get();
}
