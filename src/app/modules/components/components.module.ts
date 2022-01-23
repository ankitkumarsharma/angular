import { reducers, metaReducers } from './core/state/reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { TabsComponent } from './tabs/tabs.component';
import { AccordianComponent } from './accordian/accordian.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageSliderComponent } from './image-slider/image-slider.component';


@NgModule({
  declarations: [ComponentsComponent, TabsComponent, AccordianComponent, ImageSliderComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    StoreModule.forFeature("Components",reducers,{metaReducers}),
    EffectsModule.forFeature([]),
    SharedModule
  ]
})
export class ComponentsModule { }
