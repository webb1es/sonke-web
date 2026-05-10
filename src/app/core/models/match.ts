import { Team } from './team';

export type MatchStatus = 'scheduled' | 'live' | 'final';

export interface Score {
  home: number;
  away: number;
}

export interface MatchClock {
  period?: string;
  minute?: number;
}

export interface Match {
  id: string;
  competitionId: string;
  competitionName: string;
  sport: string;
  homeTeam: Team;
  awayTeam: Team;
  kickoff: string;
  venue?: string;
  status: MatchStatus;
  score?: Score;
  clock?: MatchClock;
}
