import { Component, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-logo-nav',
  imports: [],
  templateUrl: './logo-nav.html',
})
export class LogoNav {
  readonly title = input.required<string>();
  readonly subtitle = input.required<string>();

  protected readonly letter = linkedSignal(() => {
    const title = this.title().trim();

    return title.length > 0 ? title.charAt(0).toUpperCase() : 'A';
  });
}
