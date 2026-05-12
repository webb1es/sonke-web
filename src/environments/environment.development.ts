// Resolved at runtime so `ng serve` works on any host/port; falls back for SSR.
const origin = typeof window === 'undefined' ? 'http://localhost:4200' : window.location.origin;

export const environment = {
  production: false,
  apiBaseUrl: '/api',
  auth: {
    authority: 'https://auth.webbies.dev/realms/sonke-sports-test',
    clientId: 'sonke-web-test',
    redirectUrl: origin,
    postLogoutRedirectUri: origin,
  },
};
