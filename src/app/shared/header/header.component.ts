import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  tabData:any;
  tabSubData:any;
  constructor(private _route: Router, private _store: Store<any>) {
    
   }

  ngOnInit(): void {
    
  }
  ngAfterContentChecked(){
    this._store.select("home","homeTab").subscribe((data)=>{
      this.tabData = data;
    });
    this._store.select(this.tabData['name'],"tabsPanel","tabs").subscribe((data)=>{
      this.tabSubData = data;
    });
  }
  onRouteHome(){
    this._route.navigate(['/'])
  }
  onRouteTab(){
    this._route.navigate([this.tabData['link']]);
  }
}
