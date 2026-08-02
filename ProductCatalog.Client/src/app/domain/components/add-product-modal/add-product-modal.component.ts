import { Component, inject, model, signal } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AddProductDto } from '@app/models/add-product.model';
import { ProductService } from '@app/services/product.service';
import { ModalComponent } from '@app/shared/components/modal/modal.component';

@Component({
	selector: 'app-add-product-modal',
	imports: [
		ModalComponent,
		ReactiveFormsModule
	],
	templateUrl: './add-product-modal.component.html',
	styleUrl: './add-product-modal.component.css',
})
export class AddProductModalComponent {
	private readonly productService = inject(ProductService);

	public readonly form = new FormGroup({
		code: new FormControl(''),
		name: new FormControl(''),
		price: new FormControl<number | null>(null),
	});

	public readonly isSaving = signal(false);
	public readonly saveError = signal<string | null>(null);

	public isVisible = model<boolean>(false);

	public async submit(): Promise<void> {
		const price = this.form.value.price;
		const code = this.form.value.code;
		const name = this.form.value.name;

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
			this.close();
		} catch {
			this.saveError.set('Could not add product. Please try again.');
		} finally {
			this.isSaving.set(false);
		}
	}

	public close(): void {
		this.isVisible.set(false);
		this.form.reset();
	}
}
