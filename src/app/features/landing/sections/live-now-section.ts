import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
  selector: 'app-live-now-section',
  imports: [DatePipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="live" class="bg-zinc-50 py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 class="text-sm font-semibold uppercase tracking-wide text-brand-600">Right now</h2>
            <p class="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Live across the platform
            </p>
          </div>
          <a routerLink="/dashboard" class="hidden text-sm font-semibold text-brand-700 hover:text-brand-800 sm:block">
            Open dashboard →
          </a>
        </div>

        @if (live().length > 0) {
          <ul class="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
            @for (m of live(); track m.id) {
              <li class="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div class="flex items-center justify-between text-xs">
                  <span class="inline-flex items-center gap-1.5 rounded-md bg-red-50 px-2 py-1 font-medium text-red-700">
                    <span class="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-red-500"></span>
                    LIVE · {{ m.clock?.minute }}'
                  </span>
                  <span class="text-zinc-500">{{ m.competitionName }} · {{ m.sport }}</span>
                </div>
                <div class="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                  <div class="flex items-center gap-3">
                    <span class="grid h-10 w-10 place-items-center rounded-md text-xs font-bold text-white" [style.background-color]="m.homeTeam.primaryColor">{{ m.homeTeam.shortName }}</span>
                    <span class="truncate font-medium text-zinc-900">{{ m.homeTeam.name }}</span>
                  </div>
                  <div class="text-center font-display text-3xl font-bold tabular-nums text-zinc-900">
                    {{ m.score?.home }} <span class="text-zinc-300">·</span> {{ m.score?.away }}
                  </div>
                  <div class="flex items-center justify-end gap-3">
                    <span class="truncate font-medium text-zinc-900">{{ m.awayTeam.name }}</span>
                    <span class="grid h-10 w-10 place-items-center rounded-md text-xs font-bold text-white" [style.background-color]="m.awayTeam.primaryColor">{{ m.awayTeam.shortName }}</span>
                  </div>
                </div>
                @if (m.venue) {
                  <p class="mt-3 text-center text-xs text-zinc-500">{{ m.venue }}</p>
                }
              </li>
            }
          </ul>
        } @else {
          <div class="mt-10 rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center">
            <p class="font-medium text-zinc-700">Nothing live right now.</p>
            @if (next()) {
              <p class="mt-1 text-sm text-zinc-500">Next up: {{ next() | date:'EEE d MMM, HH:mm' }}</p>
            }
          </div>
        }
      </div>
    </section>
  `,
})
export class LiveNowSection {
  private readonly mock = inject(MockDataService);
  protected readonly live = this.mock.liveNow;
  protected readonly next = computed(() => this.mock.upcomingFixtures()[0]?.kickoff);
}
