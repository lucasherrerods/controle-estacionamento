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
  placa: string;
  horaEntrada: string;
  estacionado: boolean;
}