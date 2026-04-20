export interface Status {
  totalVagas: number;
  vagasOcupadas: number;
  vagasDisponiveis: number;
}

export interface ResultadoSaida {
  placa: string;
  tempoEstacionado: number;
  valorCobrado: number;
}