import {provideRouter, Routes, withComponentInputBinding, withRouterConfig} from "@angular/router";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {ENVIRONMENT_INITIALIZER, provideZoneChangeDetection} from "@angular/core";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";


export interface CoreOptions {
  routes: Routes
}

export function provideCore({ routes }: CoreOptions) {
   return [
     provideZoneChangeDetection(),
     provideAnimationsAsync(),
     provideHttpClient(withFetch()),
     provideRouter(
       routes,
       withRouterConfig({
         onSameUrlNavigation: 'reload'
       }),
       withComponentInputBinding()
     ),
     {
       provide: ENVIRONMENT_INITIALIZER,
       multi: true,
       useValue () {
         console.log('INIT APP')
       }
     }
   ]
}
