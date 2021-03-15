import { TabsTypes } from './../core/components.types';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DYNAMIC_TAB_DATA } from '../core/components.constant';
import { destroyTabTitle } from '../core/state/actions/components.actions';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  tabItem: number = 1;
  dynamicTabItem:number = 1; 
  dynamicTab:any = DYNAMIC_TAB_DATA;
  constructor(private _store: Store<any>) { }

  ngOnInit(): void {
  }
  tabSelect(e:any) {
    this.tabItem = e;
  }
  dynamicTabSelect(e:any){
    this.dynamicTabItem = e;
  }
  onBack(){
    let input:TabsTypes = {
      name:"",
      info:"",
    }
    this._store.dispatch(destroyTabTitle({payload: input}))
  }
}
