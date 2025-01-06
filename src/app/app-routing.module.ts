import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { MailComponent } from './pages/mail/mail.component';
import { DocumentComponent } from './pages/document/document.component';
import { InternetComponent } from './pages/internet/internet.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'mail', component: MailComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'internet', component: InternetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
