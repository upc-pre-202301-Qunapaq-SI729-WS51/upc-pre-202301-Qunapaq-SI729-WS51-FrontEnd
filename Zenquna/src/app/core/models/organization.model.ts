import { User } from './user.model';

export interface Organization {
  id: number;
  user: User;
  name: string;
  RUC?: string;
  description: string;
  webPage?: string;
  logo?: string;
}
