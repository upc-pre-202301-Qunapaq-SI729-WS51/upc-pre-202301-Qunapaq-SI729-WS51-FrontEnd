import { Campaign } from './campaign.model';

export interface Post {
  id: number;
  campaign: Campaign;
  title: string;
  content: string;
  multimedia: string;
  date: Date;
}
