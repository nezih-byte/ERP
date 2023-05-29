export interface Ticket {
  _id: string;
  designiation?: string;
  typeClient?: string;
  emplacement?: string;
  numSerie?: string;
  numero?: string;
  pdr?: string;
  remarque?: string;
  reparable?: string;
  createdBy?: string;
  assignedTo?: string;
  createdAt?: Date;
  updatedAt?: Date;
  lapTime?: string;
  role?: string;
  titre?: string;
  pdfComposant?: string;
  affectedToCompany?: string;
  affectedToClient?: string;
  composant: any[];
}
