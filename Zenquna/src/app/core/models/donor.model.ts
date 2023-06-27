import { User } from './user.model';

export interface Donor {
  id: number;
  user: User;
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  phone: string;
  DNI: string;
}
