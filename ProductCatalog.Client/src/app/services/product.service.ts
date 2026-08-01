import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient, httpResource } from '@angular/common/http';
import { AddProductDto } from '../models/add-product.model';
import { Product } from '../models/product.model';
import { firstValueFrom } from "rxjs";

@Service()
export class ProductService {
	private readonly http = inject(HttpClient);
	private readonly baseUrl = '/api/products';

	private readonly productsResource = httpResource<Product[]>(
		() => this.baseUrl,
		{ defaultValue: [] },
	);

	public readonly products = this.productsResource.value.asReadonly();
	public readonly isLoading = this.productsResource.isLoading;
	public readonly error = this.productsResource.error;

	public reload(): void {
		this.productsResource.reload();
	}

	public async add(dto: AddProductDto): Promise<Product> {
		const created = await firstValueFrom(
			this.http.post<Product>(this.baseUrl, dto),
		);

		this.productsResource.update(current => [...current, created]);

		return created;
	}

}
