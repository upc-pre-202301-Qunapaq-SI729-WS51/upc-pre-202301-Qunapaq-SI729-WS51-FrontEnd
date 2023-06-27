import { Campaign } from './campaign.model';

export interface BankAccount {
  id: number;
  bank: string;
  accountNumber: string;
  campaign: Campaign;
}
