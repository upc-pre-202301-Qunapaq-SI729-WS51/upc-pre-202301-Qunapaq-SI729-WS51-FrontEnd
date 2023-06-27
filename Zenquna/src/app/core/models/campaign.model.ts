import { Locations } from './location.model';
import { Organization } from './organization.model';

export interface Campaign {
  id: number;
  organization: Organization;
  name: string;
  slogan?: string;
  description: string;
  goal: number;
  collected: number;
  startDate: string;
  endDate: string;
  status: string;
  headerImage: string;
  bodyImage?: string;
  locations: Locations[];
}
