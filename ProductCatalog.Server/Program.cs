using ProductCatalog.Server.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IProductService, InMemoryProductService>();

builder.Services.AddControllers();
builder.Services.AddOpenApi();

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

if (app.Environment.IsDevelopment())
{
	app.MapOpenApi();
	app.UseSwaggerUI(options =>
	{
		options.SwaggerEndpoint(url: "/openapi/v1.json", name: "v1");
	});
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.MapFallbackToFile("/index.html");

app.Run();