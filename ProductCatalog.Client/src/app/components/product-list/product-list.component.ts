import { CurrencyPipe } from '@angular/common';
import { Component, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { AddProductDto } from '../../models/add-product.model';

@Component({
	selector: 'app-product-list',
	standalone: true,
	imports: [CurrencyPipe, FormsModule],
	templateUrl: './product-list.component.html',
})
export class ProductListComponent {
	private readonly productService = inject(ProductService);

	readonly products = this.productService.products;
	readonly isLoading = this.productService.isLoading;
	readonly error = this.productService.error;

	readonly code = model<string>('');
	readonly name = model<string>('');
	readonly price = model<number | null>(null);
	readonly isSaving = signal(false);
	readonly saveError = signal<string | null>(null);

	reload(): void {
		this.productService.reload();
	}

	async add(): Promise<void> {
		const price = this.price();
		const code = this.code();
		const name = this.name();

		if (!code || !name || price == null) {
			return;
		}

		const dto: AddProductDto = {
			code: code,
			name: name,
			price: price,
		};

		this.isSaving.set(true);
		this.saveError.set(null);

		try {
			await this.productService.add(dto);
			this.code.set('');
			this.name.set('');
			this.price.set(null);
		} catch {
			this.saveError.set('Could not add product. Please try again.');
		} finally {
			this.isSaving.set(false);
		}
	}
}
