import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding,withPreloading } from '@angular/router';
// import { PreloadAllModules, provideRouter, withComponentInputBinding } from '@angular/router';

import {provideHttpClient} from '@angular/common/http' //este lo agregue yo para conectarnos a las APIS

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    //con el withComponentInputBinding()) indica que los parametros le lleguen como inputs a las paginas 
     provideRouter(routes,withComponentInputBinding(),withPreloading(PreloadAllModules)),
    // provideRouter(routes,withComponentInputBinding()), 

     provideClientHydration(),
    provideHttpClient()]
};
