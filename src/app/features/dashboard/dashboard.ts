import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MockDataService } from '../../core/services/mock-data.service';
import { AuthService } from '../../core/services/auth.service';
import { UpcomingFixtures } from './widgets/upcoming-fixtures';
import { LatestScores } from './widgets/latest-scores';
import { NewsFeed } from './widgets/news-feed';

@Component({
  selector: 'app-dashboard',
  imports: [UpcomingFixtures, LatestScores, NewsFeed],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  private readonly mock = inject(MockDataService);
  private readonly auth = inject(AuthService);

  protected readonly firstName = computed(() => (this.auth.user()?.fullName ?? '').split(' ')[0]);
  protected readonly liveBanner = computed(() => {
    const n = this.mock.liveCount();
    return n > 0 ? `${n} match${n === 1 ? '' : 'es'} live right now.` : null;
  });
}
