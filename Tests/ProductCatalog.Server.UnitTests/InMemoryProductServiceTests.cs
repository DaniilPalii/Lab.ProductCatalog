using ProductCatalog.Server.Dtos;
using ProductCatalog.Server.Services;

namespace ProductCatalog.Server.UnitTests;

[TestFixture]
public class InMemoryProductServiceTests
{
	private InMemoryProductService productService;

	[SetUp]
	public void Setup()
	{
		productService = new();
	}

	[Test]
	public void Add_ShouldReturnAddedProductWithId()
	{
		var product = new AddProductDto(
			Name: "Test Product",
			Code: "TP001",
			Price: 9.99m);

		var result = productService.Add(product);

		using (Assert.EnterMultipleScope())
		{
			Assert.That(result.Name, Is.EqualTo(product.Name));
			Assert.That(result.Code, Is.EqualTo(product.Code));
			Assert.That(result.Price, Is.EqualTo(product.Price));
			Assert.That(result.Id, Is.Not.Default);
		}
	}

	[Test]
	public void Get_WhenEmpty_ShouldReturnEmptyList()
	{
		var result = productService.Get();

		Assert.That(result, Is.Empty);
	}

	[Test]
	public void Get_WhenSingleProductAdded_ShouldReturnProduct()
	{
		var product = new AddProductDto(
			Name: "Test Product",
			Code: "TP001",
			Price: 9.99m);

		productService.Add(product);
		var result = productService.Get();

		Assert.That(result, Has.One.Items);
		using (Assert.EnterMultipleScope())
		{
			Assert.That(result[0].Name, Is.EqualTo(product.Name));
			Assert.That(result[0].Code, Is.EqualTo(product.Code));
			Assert.That(result[0].Price, Is.EqualTo(product.Price));
			Assert.That(result[0].Id, Is.Not.Default);
		}
	}

	[Test]
	public void Get_WhenMultipleProductsAdded_ShouldReturnAllProducts()
	{
		var products = new AddProductDto[]
		{
			new(
				Name: "Test Product",
				Code: "TP001",
				Price: 9.99m),

			new(
				Name: "Another Product",
				Code: "AP002",
				Price: 19.99m),
		};

		foreach (var product in products)
			productService.Add(product);

		var result = productService.Get();

		Assert.That(result, Has.Exactly(2).Items);
	}
}