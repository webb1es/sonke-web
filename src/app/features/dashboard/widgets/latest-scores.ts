import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
  selector: 'app-latest-scores',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="rounded-xl border border-zinc-200 bg-white">
      <header class="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
        <h2 class="font-display text-base font-bold text-zinc-900">Latest scores</h2>
        <span class="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-600">FT</span>
      </header>
      <ul class="divide-y divide-zinc-100">
        @for (m of scores(); track m.id) {
          <li class="px-5 py-4">
            <p class="text-xs text-zinc-500">{{ m.kickoff | date:'EEE d MMM' }} · {{ m.sport }}</p>
            <div class="mt-2 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="grid h-7 w-7 place-items-center rounded-md text-[10px] font-bold text-white" [style.background-color]="m.homeTeam.primaryColor">{{ m.homeTeam.shortName }}</span>
                <span class="text-sm font-medium text-zinc-900">{{ m.homeTeam.name }}</span>
              </div>
              <span class="font-display text-lg font-bold tabular-nums text-zinc-900">{{ m.score?.home }}</span>
            </div>
            <div class="mt-1.5 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="grid h-7 w-7 place-items-center rounded-md text-[10px] font-bold text-white" [style.background-color]="m.awayTeam.primaryColor">{{ m.awayTeam.shortName }}</span>
                <span class="text-sm font-medium text-zinc-900">{{ m.awayTeam.name }}</span>
              </div>
              <span class="font-display text-lg font-bold tabular-nums text-zinc-900">{{ m.score?.away }}</span>
            </div>
          </li>
        }
      </ul>
    </section>
  `,
})
export class LatestScores {
  private readonly mock = inject(MockDataService);
  protected readonly scores = this.mock.latestScores;
}
