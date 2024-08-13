import {provideRouter, Routes, withComponentInputBinding, withRouterConfig} from "@angular/router";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {FormsModule} from "@angular/forms";
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {AuthGateway} from "./auth/auth.gateway";
import {InMemoryAuthGateway} from "./auth/in-memory-auth.gateway";
import {importProvidersFrom, isDevMode, provideZoneChangeDetection} from "@angular/core";
import {UserGateway} from "./users/user.gateway";
import {InMemoryUsersGateway} from "./users/adapters/in-memory-user.gateway";
import {StubUserBuilder, UserBuilder} from "./users/models/builders/user.builder";
import {Role} from "./users/models/user.interface";

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
     },
     {
       provide: UserGateway,
       useFactory: () => new InMemoryUsersGateway().withUsers([
         new StubUserBuilder().build(),
         new UserBuilder()
           .withId('id-2')
           .withId('3333-4444-3333-66666')
           .withFirstName('Samuel')
           .withLastName('Bio')
           .withRole(Role.SUPERVISOR)
           .withEmail('samuel.bio@gmail.com')
           .withCreatedAt('2021-03-03T00:00:00.000')
           .withUpdatedAt('2021-03-03T00:00:00.000')
           .build()
       ])
     }
   ]
}

