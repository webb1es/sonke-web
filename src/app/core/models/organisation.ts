export type OrganisationType = 'club' | 'association' | 'region' | 'federation';

export interface Organisation {
  id: string;
  name: string;
  type: OrganisationType;
  logoUrl?: string;
}
