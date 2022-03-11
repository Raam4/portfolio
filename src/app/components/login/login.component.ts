import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginUser: LoginUser;
  username: string;
  password: string;
  errmsg: string;

  newUser: NewUser;
  email: string;
  newUsername: string;
  newPassword: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ){  }

  ngOnInit(): void {}

  onLogin(): void{
    this.loginUser = new LoginUser(this.username, this.password);
    this.authService.login(this.loginUser).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/portfolio/home']);
      }
    )
  }

  onRegister(): void{
    this.newUser = new NewUser(this.email, this.newUsername, this.newPassword);
    this.authService.newUs(this.newUser).subscribe(
      data => {
        this.messageService.add({severity:'success', summary: 'Register complete!', detail: 'You can now login.'});
      }
    );
  }

}
