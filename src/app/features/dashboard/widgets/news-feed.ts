import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MockDataService } from '../../../core/services/mock-data.service';

@Component({
  selector: 'app-news-feed',
  imports: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="rounded-xl border border-zinc-200 bg-white">
      <header class="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
        <h2 class="font-display text-base font-bold text-zinc-900">News &amp; announcements</h2>
        <span class="cursor-not-allowed text-xs font-medium text-zinc-400" aria-disabled="true">All news →</span>
      </header>
      <ul class="grid grid-cols-1 divide-y divide-zinc-100 md:grid-cols-2 md:divide-y-0">
        @for (n of items(); track n.id) {
          <li class="flex gap-4 p-5 md:border-r md:border-zinc-100 md:last:border-r-0">
            <span class="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3.5 3A2.5 2.5 0 0 0 1 5.5v9A2.5 2.5 0 0 0 3.5 17h13a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 3h-13ZM5 7.75A.75.75 0 0 1 5.75 7h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 5 7.75ZM5.75 11a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5Z" />
              </svg>
            </span>
            <div class="min-w-0">
              <p class="text-xs font-medium uppercase tracking-wide text-brand-700">{{ n.category }}</p>
              <h3 class="mt-1 truncate font-display text-sm font-bold text-zinc-900">{{ n.title }}</h3>
              <p class="mt-1 line-clamp-2 text-sm text-zinc-600">{{ n.excerpt }}</p>
              <p class="mt-2 text-xs text-zinc-500">{{ n.publishedAt | date:'d MMM yyyy' }} · {{ n.author }}</p>
            </div>
          </li>
        }
      </ul>
    </section>
  `,
})
export class NewsFeed {
  private readonly mock = inject(MockDataService);
  protected readonly items = this.mock.news;
}
