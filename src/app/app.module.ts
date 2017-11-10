import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { RXJS_DOC_ROUTES } from './app.routing';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateModule,
  TranslatePipe,
  TranslateService,
  TranslateLoader
} from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    MatListModule,
    MatSidenavModule,
    HttpClientModule,
    RouterModule.forRoot(RXJS_DOC_ROUTES, {
      preloadingStrategy: PreloadAllModules
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService, LanguageService, TranslatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
