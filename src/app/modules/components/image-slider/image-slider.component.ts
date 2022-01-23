import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TabsTypes } from '../core/components.types';
import { destroyTabTitle } from '../core/state/actions/components.actions';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  constructor(private _store:Store<any>) { }

  ngOnInit(): void {
  }
  onBack(){
    let input:TabsTypes = {
      name:"",
      info:"",
    }
    this._store.dispatch(destroyTabTitle({payload: input}))
  }
}
