import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { OidcSecurityService } from 'angular-auth-oidc-client';

export interface AuthUser {
  readonly id: string;
  readonly fullName: string;
  readonly email?: string;
  readonly roles: ReadonlyArray<string>;
}

interface KeycloakClaims {
  sub?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  email?: string;
  realm_access?: { roles?: string[] };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly oidc = inject(OidcSecurityService);

  private readonly authState = toSignal(this.oidc.isAuthenticated$);
  private readonly userData = toSignal(this.oidc.userData$);

  readonly isAuthenticated = computed(() => this.authState()?.isAuthenticated ?? false);

  readonly user = computed<AuthUser | null>(() => {
    const data = this.userData()?.userData as KeycloakClaims | null | undefined;
    if (!data) return null;
    return {
      id: data.sub ?? '',
      fullName: data.name ?? [data.given_name, data.family_name].filter(Boolean).join(' '),
      email: data.email,
      roles: data.realm_access?.roles ?? [],
    };
  });

  readonly roles = computed(() => this.user()?.roles ?? []);

  login(): void {
    this.oidc.authorize();
  }

  logout(): void {
    this.oidc.logoff().subscribe();
  }
}
