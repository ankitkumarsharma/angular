import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ACCORDIAN_DATA } from '../core/components.constant';
import { TabsTypes } from '../core/components.types';
import { destroyTabTitle } from '../core/state/actions/components.actions';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  accList:any = ACCORDIAN_DATA;
  constructor(private _store: Store<any>) { }

  ngOnInit(): void {
  }
  onItemClick(index:any){
    for(let i=0;i<this.accList.length;i++){
      this.accList[i].active = false;
      this.accList[index].active = true;
    }
  }
  onBack(){
    let input:TabsTypes = {
      name:"",
      info:"",
    }
    this._store.dispatch(destroyTabTitle({payload: input}))
  }

}
