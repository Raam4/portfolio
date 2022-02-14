import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.form = this.formBuilder.group(
      {
        username:['', [Validators.required, Validators.minLength(5)]],
        password:['', [Validators.required, Validators.minLength(8)]]
      }
    );
  }

  ngOnInit(): void {
  }

}
