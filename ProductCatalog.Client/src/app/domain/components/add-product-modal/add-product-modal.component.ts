import { Component, inject, model, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AddProductDto } from '@app/models/add-product.model';
import { ProductService } from '@app/services/product.service';
import { ModalComponent } from '@app/shared/components/modal/modal.component';
import { nonWhitespaceValidator } from '@app/shared/validators/nonWhitespaceValidator';

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
	private readonly nonNullableFormBuilder = inject(NonNullableFormBuilder);

	public readonly form = this.nonNullableFormBuilder.group({
		code: ['', [Validators.required, nonWhitespaceValidator()]],
		name: ['', [Validators.required, nonWhitespaceValidator()]],
		price: this.nonNullableFormBuilder.control<number | null>(null, [Validators.required, Validators.min(0)]),
	});

	public readonly isSaving = signal(false);
	public readonly saveError = signal<string | null>(null);

	public isVisible = model<boolean>(false);

	public async submit(): Promise<void> {
		const { code, name, price } = this.form.value;

		if (!code || !name || price == null)
			return;

		const dto: AddProductDto = {
			code: code.trim(),
			name: name.trim(),
			price: price
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
