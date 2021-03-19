import { LoginTypes } from './../core/auth.types';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { saveLogin } from '../core/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _store: Store) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required],
    })
  }
  onSubmit(value: LoginTypes){
    if(this.loginForm.valid){
      this._store.dispatch(saveLogin({payload: value}));
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
