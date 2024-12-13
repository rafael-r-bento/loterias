export interface ILatestConcurso {
  loteria: string;
  concurso: number;
  dezenas: string[];
  premiacoes: IPremio[];
  proximoConcurso: number;
  dataProximoConcurso: string;
  valorEstimadoProximoConcurso: number;
}

export interface IPremio {
  descricao: string;
  faixa: number;
  ganhadores: number;
  valorPremio: number;
}