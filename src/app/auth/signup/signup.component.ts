import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveUser } from '../core/actions/auth.actions';
import { UserTypes } from '../core/auth.types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _store: Store, private _route: Router) { }

  ngOnInit(): void {
    this.signupForm = this._fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  onSubmit(value:any) {
    if(this.signupForm.valid){
      this._store.dispatch(saveUser({payload: value}));
      this._route.navigate(['/auth/login']);
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
