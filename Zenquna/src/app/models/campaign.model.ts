export interface Campaign {
  id: number;
  name: string;
  slogan: string;
  description: string;
  goal: number;
  collected: number;
  startDate: LocalDate;
  endDate: LocalDate;
  status: string;
  headerImage: string;
  bodyImage: string;


  category: Array<string>;
  department: string;
  district: string;
  summary: string;
  imageBanner: string;
  imageMini: string;
  donors: Array<string>;
  deadline: string;
}
