import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { ArquitetoComponent } from './arquiteto/arquiteto/arquiteto.component';
import { ArquitetoFormComponent } from './arquiteto/arquiteto-form/arquiteto-form.component';
import { ScComponent } from './sc/sc/sc.component';
import { ScFormComponent } from './sc/sc-form/sc-form.component';

import { Routes, RouterModule } from '@angular/router';
import { SalesConsultant } from './classes/sales-consultant';


const routes: Routes = [
  { path: 'pocs', component: ListComponent },
  { path: 'arquiteto', component: ArquitetoComponent },
  { path: 'sc', component: ScComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    BodyComponent,
    FormComponent,
    ListComponent,
    ArquitetoComponent,
    ArquitetoFormComponent,
    ScComponent,
    ScFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
