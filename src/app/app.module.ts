import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FondEcranComponent } from './composant/fond-ecran/fond-ecran.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FondEcranComponent,
    PageHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
