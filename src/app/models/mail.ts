export interface Mail {
  id: number;
  expediteur_id: number;
  date: string;
  objet: string;
  contenu: string;
  lu: boolean;
  important: boolean;
}
