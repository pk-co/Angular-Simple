import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading =true

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  loginFailed = false;

  constructor(private authService: AuthService, private storageService: StorageService, private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);


    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    const user_name = 'admin';
    const pass = 'a12345';

    if(username == user_name && pass == pass) {
      this.router.navigate(['/admin/ad-home']);
    } else {
      this.loginFailed = true;
    }
    // this.authService.login(username, password).subscribe({
    //   next: data => {
    //     this.storageService.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.storageService.getUser().roles;
    //     // this.reloadPage();
    //     this.router.navigate(['/admin'])
    //   },
    //   error: err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
