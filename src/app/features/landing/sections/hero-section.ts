import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative isolate overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 text-white">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 opacity-30">
        <div class="absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-500 blur-[120px]"></div>
        <div class="absolute -bottom-40 left-[-10%] h-[480px] w-[480px] rounded-full bg-brand-400 blur-[140px]"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 pb-24 pt-20 sm:px-6 sm:pb-32 sm:pt-28 lg:px-8">
        <div class="grid items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-brand-100 backdrop-blur">
              <span class="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-400"></span>
              The federation platform — live in 2026
            </span>
            <h1 class="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">United by the game.</h1>
            <p class="mt-5 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
              Run your federation end to end — competitions, live scoring, streaming, statistics, commerce and payments — on a single sport-agnostic platform built for African leagues, deployed for any sport, anywhere.
            </p>
            <div class="mt-8 flex flex-wrap items-center gap-3">
              <a routerLink="/dashboard" class="inline-flex items-center justify-center rounded-md bg-accent-500 px-5 py-3 text-sm font-semibold text-brand-950 shadow-sm transition-colors hover:bg-accent-400">
                Open the dashboard
                <svg class="ml-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#features" class="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
                See the platform
              </a>
            </div>
            <dl class="mt-10 grid max-w-md grid-cols-3 gap-6 text-sm">
              <div>
                <dt class="text-brand-200">Sports</dt>
                <dd class="mt-1 font-display text-2xl font-bold">Any</dd>
              </div>
              <div>
                <dt class="text-brand-200">Modules</dt>
                <dd class="mt-1 font-display text-2xl font-bold">18+</dd>
              </div>
              <div>
                <dt class="text-brand-200">Payments</dt>
                <dd class="mt-1 font-display text-2xl font-bold">Mobile-first</dd>
              </div>
            </dl>
          </div>

          <div class="lg:col-span-5">
            <div class="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
              <div class="rounded-xl bg-zinc-950/80 p-5 ring-1 ring-white/10">
                <div class="flex items-center justify-between">
                  <span class="inline-flex items-center gap-1.5 rounded-md bg-red-500/15 px-2 py-1 text-xs font-medium text-red-300">
                    <span class="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-400"></span>
                    LIVE · 67'
                  </span>
                  <span class="text-xs text-zinc-400">Sonke PSL · Soccer</span>
                </div>
                <div class="mt-5 flex items-center justify-between gap-3">
                  <div class="flex flex-1 items-center gap-3">
                    <span class="grid h-10 w-10 place-items-center rounded-md bg-blue-700 text-xs font-bold">DYN</span>
                    <span class="font-medium">Dynamos FC</span>
                  </div>
                  <span class="font-display text-2xl font-bold tabular-nums">1</span>
                </div>
                <div class="mt-3 flex items-center justify-between gap-3">
                  <div class="flex flex-1 items-center gap-3">
                    <span class="grid h-10 w-10 place-items-center rounded-md bg-green-700 text-xs font-bold">CAP</span>
                    <span class="font-medium">CAPS United</span>
                  </div>
                  <span class="font-display text-2xl font-bold tabular-nums text-zinc-400">0</span>
                </div>
                <div class="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
                  <div class="rounded-md bg-white/5 p-2">
                    <p class="text-zinc-400">Shots</p>
                    <p class="mt-1 font-medium">12 / 7</p>
                  </div>
                  <div class="rounded-md bg-white/5 p-2">
                    <p class="text-zinc-400">Possession</p>
                    <p class="mt-1 font-medium">58%</p>
                  </div>
                  <div class="rounded-md bg-white/5 p-2">
                    <p class="text-zinc-400">Corners</p>
                    <p class="mt-1 font-medium">5 / 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroSection {}
