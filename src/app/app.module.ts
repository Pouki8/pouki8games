import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FondEcranComponent } from './composant/fond-ecran/fond-ecran.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { MailComponent } from './pages/mail/mail.component';
import { DocumentComponent } from './pages/document/document.component';
import { InternetComponent } from './pages/internet/internet.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FondEcranComponent,
    PageHomeComponent,
    MailComponent,
    DocumentComponent,
    InternetComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
