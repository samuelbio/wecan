import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';
import {provideCore} from "./core/core";
import { provideNzIcons } from './icons-provider';
import { fr_FR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

registerLocaleData(fr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideCore({routes}), provideNzIcons(), provideNzI18n(fr_FR), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient()
  ]
};
