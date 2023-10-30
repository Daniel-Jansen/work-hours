import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogbookModule } from './logbook/logbook.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageAccessDeniedComponent } from './page-access-denied/page-access-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageAccessDeniedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
