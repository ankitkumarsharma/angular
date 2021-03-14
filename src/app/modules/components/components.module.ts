import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordianComponent } from './accordian/accordian.component';


@NgModule({
  declarations: [ComponentsComponent, TabsComponent, AccordianComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
