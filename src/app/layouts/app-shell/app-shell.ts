import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

interface SidebarItem {
  readonly label: string;
  readonly iconPath: string;
}

const PLACEHOLDER_NAV: ReadonlyArray<SidebarItem> = [
  { label: 'Fixtures', iconPath: 'M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Z' },
  { label: 'Watch', iconPath: 'M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z' },
  { label: 'Standings', iconPath: 'M3 4.75A.75.75 0 0 1 3.75 4h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 4.75ZM3 9.75A.75.75 0 0 1 3.75 9h12.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75ZM3.75 14a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z' },
  { label: 'News', iconPath: 'M3.5 3A2.5 2.5 0 0 0 1 5.5v9A2.5 2.5 0 0 0 3.5 17h13a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 3h-13Zm0 1.5h13c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1h-13c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1Z' },
];

@Component({
  selector: 'app-app-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app-shell.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShell {
  private readonly auth = inject(AuthService);

  protected readonly sidebarCollapsed = signal(false);
  protected readonly user = this.auth.user;
  protected readonly placeholderNav = PLACEHOLDER_NAV;
  protected readonly initials = computed(() => {
    const [first = '', last = ''] = (this.user()?.fullName ?? '').split(' ');
    return ((first[0] ?? '') + (last[0] ?? '')).toUpperCase() || '?';
  });

  protected toggleSidebar() {
    this.sidebarCollapsed.update((v) => !v);
  }

  protected logout() {
    this.auth.logout();
  }
}
