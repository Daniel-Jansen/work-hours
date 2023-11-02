import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogbookModule } from './logbook/logbook.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageAccessDeniedComponent } from './page-access-denied/page-access-denied.component';
import { LogbookComponent } from './logbook/logbook.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageAccessDeniedComponent,
    LogbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
