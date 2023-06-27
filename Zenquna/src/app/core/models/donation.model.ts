import { Campaign } from './campaign.model';
import { PaymentData } from './paymentData.model';

export interface Donation {
  id: number;
  campaign: Campaign;
  paymentData: PaymentData;
  amount: number;
  date: Date;
}
