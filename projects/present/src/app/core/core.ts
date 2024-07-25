import {provideRouter, Routes, withComponentInputBinding, withRouterConfig} from "@angular/router";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {ENVIRONMENT_INITIALIZER, importProvidersFrom, isDevMode, provideZoneChangeDetection} from "@angular/core";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {FormsModule} from "@angular/forms";
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {AuthGateway} from "./ports/auth.gateway";
import {InMemoryAuthGateway} from "./adapters/in-memory-auth.gateway";

export interface CoreOptions {
  routes: Routes
}

export function provideCore({ routes }: CoreOptions) {
   return [
     provideZoneChangeDetection(),
     provideAnimationsAsync(),
     provideHttpClient(withFetch()),
     importProvidersFrom(FormsModule),
     provideStore(),
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
     },
     provideStoreDevtools({
       maxAge: 25,
       logOnly: !isDevMode(),
       autoPause: true,
       trace: false,
       traceLimit: 75,
     }),
     {
       provide: AuthGateway,
       useFactory: () => new InMemoryAuthGateway().withUser({
         email: 'samuel.bio@gmail.com',
         firstName: 'Samuel',
         lastName: 'Bio',
       })
     }
   ]
}

