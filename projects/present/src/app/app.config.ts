import { ApplicationConfig, isDevMode } from '@angular/core';

import { routes } from './app.routes';
import {provideCore} from "./core/core";
import { provideNzIcons } from './icons-provider';
import { fr_FR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStoreDevtools } from '@ngrx/store-devtools';

registerLocaleData(fr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideCore({ routes }),
    provideNzIcons(),
    provideNzI18n(fr_FR),
    provideAnimationsAsync(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
