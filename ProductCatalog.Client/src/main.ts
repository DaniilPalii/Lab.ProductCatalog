import { loadTranslations } from '@angular/localize';
import translations from './locale/messages.pl.json';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@app/app.config';
import { App } from '@app/app';

loadTranslations(translations);
document.title = $localize`:@@appTitle:Product Catalog`;

bootstrapApplication(App, appConfig)
	.catch((err) => console.error(err));
