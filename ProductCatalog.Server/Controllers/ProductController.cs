using Microsoft.AspNetCore.Mvc;
using ProductCatalog.Server.Dtos;
using ProductCatalog.Server.Services;

namespace ProductCatalog.Server.Controllers
{
	[ApiController]
	[Route("product")]
	public class ProductController(IProductService productService) : ControllerBase
	{
		[HttpGet]
		public IEnumerable<ProductDto> Get()
		{
			return productService.Get();
		}

		[HttpPost]
		public ProductDto Add(AddProductDto dto)
		{
			return productService.Add(dto);
		}
	}
}