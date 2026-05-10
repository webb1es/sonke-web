import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './public-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicLayout {
  protected readonly mobileMenuOpen = signal(false);
  protected readonly currentYear = new Date().getFullYear();

  protected toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  protected closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
