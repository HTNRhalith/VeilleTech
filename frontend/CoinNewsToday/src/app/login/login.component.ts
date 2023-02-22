import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    Username: new FormControl('', Validators.required),
    MotDePasse: new FormControl('', Validators.required),
  })

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.formGroup?.value).subscribe((res) => {
      console.log(res);
    })
  }
}
