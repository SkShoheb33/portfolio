import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ContactComponent } from './components/contact/contact.component';
import { SchoolComponent } from './components/about/school/school.component';
import { InterComponent } from './components/about/inter/inter.component';
import { EngineeringComponent } from './components/about/engineering/engineering.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    SchoolComponent,
    InterComponent,
    EngineeringComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
