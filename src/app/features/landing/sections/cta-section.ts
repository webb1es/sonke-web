import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="cta" class="bg-gradient-to-br from-brand-700 to-brand-900 py-20 text-white sm:py-28">
      <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 class="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to bring your federation online?
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-base text-brand-100">
          Roll out competitions, scoring, streaming, payments and stats with one platform — configured per federation, deployed where you need it.
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a routerLink="/dashboard" class="inline-flex items-center rounded-md bg-accent-500 px-5 py-3 text-sm font-semibold text-brand-950 shadow-sm hover:bg-accent-400">
            Open the dashboard
          </a>
          <a href="mailto:hello@visarend.co.zw" class="inline-flex items-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CtaSection {}
