import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { MessageService } from 'primeng/api';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  signupForm = this.formBuilder.group({
    email: ['', Validators.required],
    signUsername: ['', Validators.required],
    signPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  },{
    validators: (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('signPassword');
      const confirmPassword = control.get('confirmPassword');
      return password?.value === confirmPassword?.value ? null : { notmatched: true };
    }
  }
  );

  newUser: NewUser;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private formBuilder: FormBuilder
  ){  }

  ngOnInit(): void {}

  onLogin(): void{
    const loginUser = new LoginUser(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value);
    this.authService.login(loginUser).subscribe({
      next: (data) => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/portfolio/home']);
      },
      error: (err) => {
        this.messageService.add({severity:'error', summary: 'Invalid login', detail: `${err.error.message || err.error.error}`})
      }
    })
  }

  onSignup(): void{
    this.newUser = new NewUser(this.signupForm.get('email')?.value, this.signupForm.get('signUsername')?.value, this.signupForm.get('signPassword')?.value);
    this.authService.newUs(this.newUser).subscribe({
      next: (data) => {
        this.messageService.add({severity:'success', summary: 'Signup complete!', detail: 'You can now login.'});
      },
      error: (err) => {
        this.messageService.add({severity:'error', summary: 'Signup error!', detail: `${err.error.message || err.error.error}`})
      }
    });
  }

}
