export type Presencas = {
  id: number;
  logo?: string;
  nome: string;
  _count: {
    presentes: number;
    membros: number;
  };
};
