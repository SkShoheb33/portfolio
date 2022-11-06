import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path : 'about', component : AboutComponent},
  { path : 'home', component : HomeComponent},
  { path : 'contact', component : ContactComponent},
  { path : 'certificates' , component : CertificatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutComponent,HomeComponent,ContactComponent,CertificatesComponent]