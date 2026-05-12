import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-public-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './public-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayout {
  private readonly auth = inject(AuthService);

  protected readonly mobileMenuOpen = signal(false);
  protected readonly currentYear = new Date().getFullYear();
  protected readonly isAuthenticated = this.auth.isAuthenticated;

  protected toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  protected closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  protected login() {
    this.auth.login();
  }
}
