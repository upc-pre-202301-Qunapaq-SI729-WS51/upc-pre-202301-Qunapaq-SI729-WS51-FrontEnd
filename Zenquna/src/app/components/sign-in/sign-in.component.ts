import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '@services/User.service';
import { DonorService } from '@services/Donor.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private donorService: DonorService
  ) {}

  signIn(email: string, password: string) {
    const apiURL = 'https://zenquna.uc.r.appspot.com/api/zq/v1/users';

    this.http.get(apiURL).subscribe(
      (response: any) => {
        const user = response.find(
          (u: any) =>
            u.email === email &&
            u.password === password &&
            u.userType === 'donor'
        );
        if (user) {
          this.userService.setDonor(user);
          this.donorService.setDonorByUsername(user.username); // Validar el donante en el DonorService
          this.router.navigate(['/home']); // Redirigir al usuario a la página de inicio
        } else {
          // Las credenciales de inicio de sesión son inválidas o el usuario no es un donador válido
          // Mostrar mensaje de error o tomar otra acción
        }
      },
      (error) => {
        // Ocurrió un error al comunicarse con la API, manejar el error apropiadamente
      }
    );
    // this.http.post(apiURL, { email, password }).subscribe(
    //   (response: any) => {
    //     if (response.userType === 'donor') {
    //       this.userService.setDonor(response);
    //       // Iniciar sesión exitosa, redirigir al usuario a la página de inicio o a otra página deseada
    //     } else {
    //       // El usuario no es un donador válido, mostrar un mensaje de error o tomar alguna otra acción
    //     }
    //   },
    //   (error) => {
    //     // Ocurrió un error al comunicarse con la API, manejar el error apropiadamente
    //   }
    // );
  }
}
