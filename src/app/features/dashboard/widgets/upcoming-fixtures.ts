import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
  selector: 'app-upcoming-fixtures',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="rounded-xl border border-zinc-200 bg-white">
      <header class="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
        <h2 class="font-display text-base font-bold text-zinc-900">Upcoming fixtures</h2>
        <span class="text-xs font-medium text-zinc-500">{{ fixtures().length }} matches</span>
      </header>
      <ul class="divide-y divide-zinc-100">
        @for (m of fixtures(); track m.id) {
          <li class="flex items-center gap-4 px-5 py-4">
            <div class="hidden w-24 shrink-0 text-xs text-zinc-500 sm:block">
              <p class="font-medium text-zinc-700">{{ m.kickoff | date:'EEE d MMM' }}</p>
              <p>{{ m.kickoff | date:'HH:mm' }}</p>
            </div>
            <div class="flex flex-1 items-center justify-between gap-3">
              <div class="flex min-w-0 items-center gap-2.5">
                <span class="grid h-8 w-8 shrink-0 place-items-center rounded-md text-[10px] font-bold text-white" [style.background-color]="m.homeTeam.primaryColor">{{ m.homeTeam.shortName }}</span>
                <span class="truncate font-medium text-zinc-900">{{ m.homeTeam.name }}</span>
              </div>
              <span class="shrink-0 text-xs text-zinc-400">vs</span>
              <div class="flex min-w-0 items-center justify-end gap-2.5">
                <span class="truncate font-medium text-zinc-900">{{ m.awayTeam.name }}</span>
                <span class="grid h-8 w-8 shrink-0 place-items-center rounded-md text-[10px] font-bold text-white" [style.background-color]="m.awayTeam.primaryColor">{{ m.awayTeam.shortName }}</span>
              </div>
            </div>
            <span class="hidden rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 md:block">{{ m.sport }}</span>
          </li>
        }
      </ul>
    </section>
  `,
})
export class UpcomingFixtures {
  private readonly mock = inject(MockDataService);
  protected readonly fixtures = this.mock.upcomingFixtures;
}
