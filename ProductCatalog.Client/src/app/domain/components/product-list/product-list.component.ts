import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddProductModalComponent } from '@app/domain/components/add-product-modal/add-product-modal.component';
import { ProductService } from '@app/services/product.service';

@Component({
	selector: 'app-product-list',
	standalone: true,
	imports: [
		CurrencyPipe,
		FormsModule,
		AddProductModalComponent,
		AddProductModalComponent
	],
	templateUrl: './product-list.component.html',
})
export class ProductListComponent {
	private readonly productService = inject(ProductService);

	public readonly products = this.productService.products;
	public readonly isLoading = this.productService.isLoading;
	public readonly error = this.productService.error;

	public readonly isAddProductModalVisible = signal(false);

	public reload(): void {
		this.productService.reload();
	}

	public openAddProductModal(): void {
		this.isAddProductModalVisible.set(true);
	}
}
