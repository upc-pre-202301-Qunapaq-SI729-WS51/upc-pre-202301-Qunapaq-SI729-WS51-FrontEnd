import { Campaign } from './campaign.model';

export interface Locations {
  id: number;
  address: string;
  reference?: string;
  district: string;
  province: string;
  department: string;
  campaign: Campaign;
}
