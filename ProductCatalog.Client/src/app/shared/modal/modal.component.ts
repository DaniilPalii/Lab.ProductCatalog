import { Component, input, model, output } from '@angular/core';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.css',
})
export class ModalComponent {
	public title = input.required<string>();
	public isVisible = model<boolean>(false);
	public submitted = output<void>();

	public close(): void {
		this.isVisible.set(false);
	}

	public submit(): void {
		this.submitted.emit();
	}
}
