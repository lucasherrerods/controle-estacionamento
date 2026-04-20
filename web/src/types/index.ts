export interface Status {
  totalVagas: number;
  ocupadas: number;
  disponiveis: number;
}

export interface ResultadoSaida {
  placa: string;
  tempoEstacionado: number;
  valorCobrado: number;
}