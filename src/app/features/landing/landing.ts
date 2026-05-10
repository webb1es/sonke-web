import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSection } from './sections/hero-section';
import { FeaturesSection } from './sections/features-section';
import { LiveNowSection } from './sections/live-now-section';
import { CtaSection } from './sections/cta-section';

@Component({
  selector: 'app-landing',
  imports: [HeroSection, FeaturesSection, LiveNowSection, CtaSection],
  templateUrl: './landing.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {}
