import { updateCurrentUser } from './../core/actions/auth.actions';
import { LoginTypes, UserTypes } from './../core/auth.types';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveIsAuth } from '../core/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userData!: UserTypes[];
  isAuth: boolean = false;
  currentUser:any;
  userError!:string;
  constructor(private _fb: FormBuilder, private _store: Store<any>, private _route: Router) { }

  ngOnInit(): void {
    this._store.dispatch(saveIsAuth({payload: false}));
    this.loginForm = this._fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required],
    });
    this._store.select("auth","user").subscribe((data:any)=>{
      if(data){
        this.userData = data;
      }
    })
  }
  onSubmit(value: LoginTypes){
    if(this.loginForm.valid){
      if(this.userData){
        this.isAuth = false;
        this.currentUser = null;
        this.userData.find((x)=>{
          if(x.username == value.username && x.password == value.password){
            this.currentUser = x;
          }
        });
        if(this.currentUser) {
          this.isAuth = false;
          this._store.dispatch(saveIsAuth({payload: true}));
          this._store.dispatch(updateCurrentUser({payload: this.currentUser}));
          this._route.navigate(['/home']);
        } else {
          this.isAuth = true;
          this.userError = "User name or password are wrong!!!";
          // this.userError = "User not found, please create account on click signup!!!";
        }
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
