import { Donor } from './donor.model';

export interface PaymentData {
  id: number;
  donor: Donor;
  cardNumber: string;
  expirationDate: Date;
  securityCode: string;
  cardHolder: string;
}
