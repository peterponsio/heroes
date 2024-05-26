import { InterceptorsModule } from './../../core/interceptors/interceptors.module';
import { CustomTranslateLoader } from './../../core/utils/customTranslateLoader';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardsModule } from '@guards/guards.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewHeroComponent } from './View/new-hero/new-hero.component';
import { EditHeroComponent } from './View/edit-hero/edit-hero.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '','.json');
}

@NgModule({
  declarations: [
    AppComponent,
    EditHeroComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: CustomTranslateLoader,
          deps: [HttpClient]
      }
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    GuardsModule,
    InterceptorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
