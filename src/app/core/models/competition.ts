export type CompetitionType = 'league' | 'tournament' | 'cup';

export interface Competition {
  id: string;
  name: string;
  sport: string;
  season: string;
  type: CompetitionType;
  logoUrl?: string;
}
