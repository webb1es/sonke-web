import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Feature {
  readonly title: string;
  readonly body: string;
  readonly theme: string;
  readonly iconPath: string;
}

const FEATURES: ReadonlyArray<Feature> = [
  {
    title: 'Competitions',
    body: 'Run leagues, tournaments and cups across seasons. Draws, fixtures, standings — handled.',
    theme: 'bg-brand-50 text-brand-600',
    iconPath: 'M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm-1-9.25a.75.75 0 0 1 1.5 0v3.25h2.25a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-4Z',
  },
  {
    title: 'Live scoring',
    body: 'Officials publish events from the touchline. Scoreboards, clocks and audit-ready logs.',
    theme: 'bg-amber-50 text-amber-600',
    iconPath: 'M3 4.75A1.75 1.75 0 0 1 4.75 3h10.5A1.75 1.75 0 0 1 17 4.75v10.5A1.75 1.75 0 0 1 15.25 17H4.75A1.75 1.75 0 0 1 3 15.25V4.75ZM6 7.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H6Zm0 3.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H6Z',
  },
  {
    title: 'Streaming',
    body: 'Native streaming with PPV and subscription access — pay-per-view for marquee fixtures.',
    theme: 'bg-brand-50 text-brand-600',
    iconPath: 'M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5Zm6.5.5v5.5l5-2.75-5-2.75Z',
  },
  {
    title: 'Statistics',
    body: 'Stats derived from scoring events. Player, team and competition leaderboards out of the box.',
    theme: 'bg-amber-50 text-amber-600',
    iconPath: 'M3 16.25A.75.75 0 0 1 3.75 15.5H5V9.75a.75.75 0 0 1 1.5 0v5.75H8V6.75a.75.75 0 0 1 1.5 0v8.75H11V11.75a.75.75 0 0 1 1.5 0v3.75H14V8.25a.75.75 0 0 1 1.5 0v7.25h.75a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 16.25Z',
  },
  {
    title: 'Commerce & payments',
    body: 'Cart, orders and payouts. EcoCash, M-Pesa, MoMo — mobile money first.',
    theme: 'bg-brand-50 text-brand-600',
    iconPath: 'M2 4.75A.75.75 0 0 1 2.75 4h2a.75.75 0 0 1 .728.568l.272 1.092H17.25a.75.75 0 0 1 .744.852l-1 7A.75.75 0 0 1 16.25 14H6.5l.27 1.077a.75.75 0 0 0 .728.568h7.752a.75.75 0 0 1 0 1.5H7.498a2.25 2.25 0 0 1-2.183-1.703L3.42 5.5h-.67A.75.75 0 0 1 2 4.75ZM6.5 17.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm9 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z',
  },
  {
    title: 'Notifications',
    body: 'Push (FCM), email and SMS — keep members and fans in sync as the action unfolds.',
    theme: 'bg-amber-50 text-amber-600',
    iconPath: 'M10 2a6 6 0 0 0-6 6v3.586l-.707.707A1 1 0 0 0 4 14h12a1 1 0 0 0 .707-1.707L16 11.586V8a6 6 0 0 0-6-6Zm0 16a3 3 0 0 1-3-3h6a3 3 0 0 1-3 3Z',
  },
];

@Component({
  selector: 'app-features-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="features" class="bg-white py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-brand-600">Capabilities</h2>
          <p class="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Everything a federation needs, in one platform.
          </p>
          <p class="mt-4 text-base text-zinc-600">
            Each capability is a module you can switch on per federation. Start with what you need; add the rest as you grow.
          </p>
        </div>

        <ul class="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          @for (f of features; track f.title) {
            <li class="rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md">
              <div class="flex items-center gap-3">
                <span class="grid h-10 w-10 place-items-center rounded-lg {{ f.theme }}">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path [attr.d]="f.iconPath" />
                  </svg>
                </span>
                <h3 class="font-display text-lg font-bold text-zinc-900">{{ f.title }}</h3>
              </div>
              <p class="mt-3 text-sm leading-relaxed text-zinc-600">{{ f.body }}</p>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class FeaturesSection {
  protected readonly features = FEATURES;
}
