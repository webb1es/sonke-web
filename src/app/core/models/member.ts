export type MemberRole = 'player' | 'referee' | 'coach' | 'admin' | 'fan';

export interface Member {
  id: string;
  fullName: string;
  roles: ReadonlyArray<MemberRole>;
  email?: string;
  avatarUrl?: string;
}
