export interface Status {
  totalVagas: number;
  ocupadas: number;
  disponiveis: number;
}

export interface ResultadoSaida {
  placa: string;
  horas: number;
  valor: number;
}

export interface Veiculo {
  id: number;
  placa: string;
  horaEntrada: string;
  horaSaida: string | null;
  estacionado: boolean;
  horas: number;
  valor: number;
}