import { Injectable, forwardRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './User.service';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  private readonly apiUrl = 'https://zenquna.uc.r.appspot.com/api/zq/v1';

  constructor(private http: HttpClient, private userService: UserService) {}

  getDonorByUsername(username: string) {
    return this.http.get<any[]>(`${this.apiUrl}/donors/user/${username}`);
  }

  setDonorByUsername(username: string) {
    this.getDonorByUsername(username).subscribe((response) => {
      const donor = response[0];
      if (donor) {
        const extractedDonor = {
          id: donor.id,
          firstName: donor.firstName,
          lastName: donor.lastName,
          address: donor.address,
          age: donor.age,
          phone: donor.phone,
          dni: donor.dni,
        };
        this.setDonor(extractedDonor);
      }
    });
  }

  setDonor(donor: any) {
    this.userService.setDonor(donor);
  }

  getDonor() {
    return this.userService.getDonor();
  }
}

// Añade esta línea al final del archivo
export const DONOR_SERVICE_PROVIDER = {
  provide: DonorService,
  useClass: forwardRef(() => DonorService),
};
