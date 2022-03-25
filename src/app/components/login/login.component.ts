import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { MessageService } from 'primeng/api';
import { FormBuilder, Validators } from '@angular/forms';

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

  signinForm = this.formBuilder.group({
    email: ['', Validators.required],
    signUsername: ['', Validators.required],
    signPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });

  errmsg: string;

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
    this.authService.login(loginUser).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/portfolio/home']);
      },
    )
  }

  onSignin(): void{
    this.newUser = new NewUser(this.signinForm.get('email')?.value, this.signinForm.get('signUsername')?.value, this.signinForm.get('signPassword')?.value);
    this.authService.newUs(this.newUser).subscribe(
      data => {
        this.messageService.add({severity:'success', summary: 'Signin complete!', detail: 'You can now login.'});
      }
    );
  }

}
