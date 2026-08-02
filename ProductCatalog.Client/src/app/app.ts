import { Component } from '@angular/core';
import { ProductListComponent } from '@app/domain/components/product-list/product-list.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [
		ProductListComponent
	]
})
export class App { }
