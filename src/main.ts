/// <reference types="@angular/localize" />

//import '@angular/common/locales/global/fr';

import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideHttpClient(),
    provideProtractorTestingSupport(), // essential for e2e testing
  ]
});

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   // eslint-disable-next-line no-console
//   .catch(err => console.error(err));
