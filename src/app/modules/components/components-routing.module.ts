import { TabsComponent } from './tabs/tabs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';

const routes: Routes = [
  { path: '', component: ComponentsComponent },
  { path: 'tabs', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
