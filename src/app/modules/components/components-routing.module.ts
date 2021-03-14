import { AccordianComponent } from './accordian/accordian.component';
import { TabsComponent } from './tabs/tabs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'accordian', component: AccordianComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
