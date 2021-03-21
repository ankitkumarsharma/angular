import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveIsAuth } from 'src/app/auth/core/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  tabData:any;
  tabSubData:any;
  currentUser:any;
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
    this._store.select("auth","currentUser").subscribe((data)=>{
      this.currentUser = data;
    });
  }
  onRouteHome(){
    this._route.navigate(['/home'])
  }
  onRouteTab(){
    this._route.navigate([this.tabData['link']]);
  }
  onLogout(){
    this._store.dispatch(saveIsAuth({payload: false}));
    this._route.navigate(['/auth'])
  }
}
