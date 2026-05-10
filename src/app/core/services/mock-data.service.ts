import { Injectable, computed, signal } from '@angular/core';
import { Competition, Match, Member, NewsItem, Team } from '../models';

const teams = {
  hig: { id: 'hig', name: 'Highlanders FC', shortName: 'HIG', primaryColor: '#000000' },
  dyn: { id: 'dyn', name: 'Dynamos FC', shortName: 'DYN', primaryColor: '#1d4ed8' },
  cap: { id: 'cap', name: 'CAPS United', shortName: 'CAP', primaryColor: '#16a34a' },
  fcp: { id: 'fcp', name: 'FC Platinum', shortName: 'FCP', primaryColor: '#7c3aed' },
  haw: { id: 'haw', name: 'Harare Hawks', shortName: 'HAW', primaryColor: '#dc2626' },
  bul: { id: 'bul', name: 'Bulawayo Bulls', shortName: 'BUL', primaryColor: '#ea580c' },
  ohr: { id: 'ohr', name: 'Old Hararians', shortName: 'OHR', primaryColor: '#0e7490' },
  ogs: { id: 'ogs', name: 'Old Georgians', shortName: 'OGS', primaryColor: '#1e40af' },
} as const satisfies Record<string, Team>;

const competitions: ReadonlyArray<Competition> = [
  { id: 'spsl-26', name: 'Sonke Premier Soccer League', sport: 'Soccer', season: '2026', type: 'league' },
  { id: 'sbc-26', name: 'Sonke Basketball Cup', sport: 'Basketball', season: '2026', type: 'cup' },
  { id: 'src-26', name: 'Sonke Rugby Championship', sport: 'Rugby', season: '2026', type: 'tournament' },
];
const [psl, sbc, src] = competitions;

const match = (id: string, c: Competition, home: Team, away: Team, kickoff: string, extra: Partial<Match> = {}): Match => ({
  id, competitionId: c.id, competitionName: c.name, sport: c.sport,
  homeTeam: home, awayTeam: away, kickoff, status: 'scheduled', ...extra,
});

const upcomingFixtures: ReadonlyArray<Match> = [
  match('m-1', psl, teams.hig, teams.dyn, '2026-05-12T15:00:00Z', { venue: 'Barbourfields Stadium' }),
  match('m-2', psl, teams.cap, teams.fcp, '2026-05-13T18:00:00Z', { venue: 'Rufaro Stadium' }),
  match('m-3', sbc, teams.haw, teams.bul, '2026-05-14T19:30:00Z', { venue: 'HICC Arena' }),
  match('m-4', src, teams.ohr, teams.ogs, '2026-05-15T14:00:00Z', { venue: 'Hartsfield Rugby Grounds' }),
  match('m-5', psl, teams.fcp, teams.hig, '2026-05-17T15:00:00Z', { venue: 'Mandava Stadium' }),
];

const liveNow: ReadonlyArray<Match> = [
  match('m-live-1', psl, teams.dyn, teams.cap, '2026-05-10T15:00:00Z', {
    venue: 'Rufaro Stadium', status: 'live',
    score: { home: 1, away: 0 }, clock: { period: '2nd Half', minute: 67 },
  }),
];

const latestScores: ReadonlyArray<Match> = [
  match('m-final-1', psl, teams.hig, teams.cap, '2026-05-09T15:00:00Z', { status: 'final', score: { home: 2, away: 1 } }),
  match('m-final-2', sbc, teams.bul, teams.haw, '2026-05-09T19:00:00Z', { status: 'final', score: { home: 88, away: 76 } }),
  match('m-final-3', src, teams.ohr, teams.ogs, '2026-05-08T14:00:00Z', { status: 'final', score: { home: 24, away: 20 } }),
  match('m-final-4', psl, teams.fcp, teams.dyn, '2026-05-08T15:00:00Z', { status: 'final', score: { home: 0, away: 0 } }),
];

const news: ReadonlyArray<NewsItem> = [
  { id: 'n-1', slug: 'highlanders-edge-caps-in-derby', title: 'Highlanders edge CAPS United in tense derby', excerpt: 'A late winner from Mlilo settled a fiery encounter at Barbourfields, lifting the Bosso to second on the table.', publishedAt: '2026-05-09T20:30:00Z', category: 'Match Report', author: 'Tendai Moyo' },
  { id: 'n-2', slug: 'streaming-passes-launch', title: 'Sonke Sports launches sport-wide streaming passes', excerpt: 'Fans can now subscribe to a single pass that unlocks live coverage across leagues, with PPV one-offs for marquee events.', publishedAt: '2026-05-09T09:00:00Z', category: 'Platform', author: 'Newsroom' },
  { id: 'n-3', slug: 'bulls-stampede-into-cup-final', title: 'Bulls stampede into Basketball Cup final', excerpt: 'Bulawayo Bulls dismantled the Hawks 88-76 to secure their place in the SBC final next month.', publishedAt: '2026-05-09T22:00:00Z', category: 'Match Report', author: 'Lerato Dube' },
  { id: 'n-4', slug: 'rugby-championship-fixtures-released', title: 'Rugby Championship full fixtures now live', excerpt: 'The 2026 SRC kicks off this weekend with Old Hararians defending the trophy at Hartsfield.', publishedAt: '2026-05-08T11:15:00Z', category: 'Competitions', author: 'Newsroom' },
  { id: 'n-5', slug: 'mobile-money-payouts', title: 'Mobile-money payouts go live for federations', excerpt: 'EcoCash, M-Pesa and MoMo payouts are now available for ticket sales, sponsorship and ad revenue.', publishedAt: '2026-05-07T07:45:00Z', category: 'Commerce', author: 'Platform Team' },
];

const currentMember: Member = { id: 'me', fullName: 'Tafadzwa Chirinda', roles: ['fan'], email: 'tafadzwa@example.com' };

@Injectable({ providedIn: 'root' })
export class MockDataService {
  readonly competitions = signal<ReadonlyArray<Competition>>(competitions);
  readonly upcomingFixtures = signal<ReadonlyArray<Match>>(upcomingFixtures);
  readonly liveNow = signal<ReadonlyArray<Match>>(liveNow);
  readonly latestScores = signal<ReadonlyArray<Match>>(latestScores);
  readonly news = signal<ReadonlyArray<NewsItem>>(news);
  readonly currentMember = signal<Member>(currentMember);
  readonly liveCount = computed(() => this.liveNow().length);
}
