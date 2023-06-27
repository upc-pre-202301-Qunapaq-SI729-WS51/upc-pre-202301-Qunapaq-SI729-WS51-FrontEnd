export interface Campaign {
  id: number;
  category: Array<string>;
  department: string;
  district: string;
  name: string;
  summary: string;
  description: string;
  headerImage: string;
  bodyImage: string;
  goal: number;
  collected: number;
  donors: Array<string>;
  deadline: string;
}
