import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent, FooterComponent, ContactComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent, FooterComponent, ContactComponent
  ]
})
export class SharedModule { }
