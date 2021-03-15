import { destroyTabTitle, saveTabTitle } from './core/state/actions/components.actions';
import { ComponentDataTypes, TabsTypes } from './core/components.types';
import { Component, OnInit } from '@angular/core';
import { COMPONENT_DATA_TYPE } from './core/components.constant';
import { Store } from '@ngrx/store';
import { saveHomeTitle } from '../home/core/actions/home.actions';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  public componentType: ComponentDataTypes[] = COMPONENT_DATA_TYPE;
  constructor(private _store:Store<any>) { }

  ngOnInit(): void {
  }
  onTab(item:any){
    this._store.dispatch(saveTabTitle({payload: item}));
  }
  onBack(){
    let input:TabsTypes = {
      name:"",
      info:"",
    }
    this._store.dispatch(saveHomeTitle({payload: input}))
  }
}
