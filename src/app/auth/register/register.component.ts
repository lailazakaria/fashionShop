import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formValue!: FormGroup;

  constructor(private fb: FormBuilder, private authService:AuthService) {}

  ngOnInit() {
    this.formValue = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const data = this.formValue.value;

    let model= {
      email:this.formValue.value.email,
      userName:{
        firstName:this.formValue.value.firstname,
        lastName:this.formValue.value.lastname,
      }
    }
    console.log(model)
    console.log(this.authService.register(model))
    localStorage.setItem('TOKEN',this.authService.register(model))

  }
}
