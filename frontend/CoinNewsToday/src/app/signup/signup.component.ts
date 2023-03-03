import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formGroup: FormGroup = new FormGroup({
    Nom: new FormControl('', Validators.required),
    Prenom: new FormControl('', Validators.required),
    Nom_Utilisateur: new FormControl('', Validators.required),
    MotDePasse: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    if (this.formGroup?.valid) {
      this.authService.register(this.formGroup.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/login'])
      })
    }
  }
}
