export interface Campaign {
  id: number;
  name: string;
  slogan: string;
  description: string;
  goal: number;
  collected: number;
  startDate: string; // Cambiado a string para simplificar
  endDate: string; // Cambiado a string para simplificar
  status: string;
  headerImage: string;
  bodyImage: string;
  locations: Location[]; // Agregado para mantener la relación con las ubicaciones
}
