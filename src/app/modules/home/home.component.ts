import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveHomeTitle } from './core/actions/home.actions';
import { COMPONENT_INTERACTION_TYPE, CONTACT_HEADER } from './core/home.constant';
import { ComponentInteractionTypes } from './core/home.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public componentType: ComponentInteractionTypes[] = COMPONENT_INTERACTION_TYPE;
  contactData = CONTACT_HEADER;
  constructor(private _store: Store<any>) { }

  ngOnInit(): void {
  }
  onTab(item:any){
    this._store.dispatch(saveHomeTitle({payload: item}));
  }
}
