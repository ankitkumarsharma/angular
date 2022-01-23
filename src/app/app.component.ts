import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  loginFlag!: boolean;
  constructor(private _store: Store<any>){
    this._store.select("auth","isAuth").subscribe((data)=>{
      this.loginFlag = data;
    })
  }
}
