import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideCocokits } from '@cocokits/angular-components';
import { framesXThemeConfig } from '@cocokits/theme-frames-x';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideCocokits(framesXThemeConfig),  
  ]
})

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));