import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '@services/User.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  userForm: FormGroup;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      dni: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', Validators.required],
    });
    this.userService.setDonor(null);
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userObj = {
        username: this.userForm.value.username,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        userType: 'donor',
      };
      this.createUser(userObj);
    }
  }

  private createUser(userObj: any) {
    const apiURL = 'https://zenquna.uc.r.appspot.com/api/zq/v1/users';

    this.http.post(apiURL, userObj).subscribe((response: any) => {
      //console.log(response);
      if (response.id) {
        const donorObj = {
          user: { id: response.id },
          firstName: this.userForm.value.firstName,
          lastName: this.userForm.value.lastName,
          address: this.userForm.value.address,
          age: this.userForm.value.age,
          phone: this.userForm.value.phone,
          dni: this.userForm.value.dni,
        };
        this.createDonor(donorObj);
      } else {
        console.error('ID de usuario no recibido de la API');
      }
    });
  }

  private createDonor(donorObj: any) {
    const apiURL = 'https://zenquna.uc.r.appspot.com/api/zq/v1/donors';
    this.http.post(apiURL, donorObj).subscribe((response: any) => {
      if (response.id) {
        this.userService.setDonor(donorObj);
      } else {
        console.error('ID de usuario no recibido de la API');
      }
    });
  }
}
