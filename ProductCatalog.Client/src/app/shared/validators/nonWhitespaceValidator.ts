import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nonWhitespaceValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		return (typeof control.value === 'string') && (control.value.trim().length === 0)
			? { whitespace: true }
			: null;
	};
}
