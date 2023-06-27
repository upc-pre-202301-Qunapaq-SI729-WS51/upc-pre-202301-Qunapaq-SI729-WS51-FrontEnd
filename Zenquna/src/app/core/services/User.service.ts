import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private donor: any;

  constructor() {}

  setDonor(donor: any) {
    this.donor = donor;
  }

  getDonor() {
    return this.donor;
  }

  getUsername() {
    return this.donor.username;
  }
}
