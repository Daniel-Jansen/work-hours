import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogbookModule } from './logbook/logbook.module';

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
    LogbookModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
