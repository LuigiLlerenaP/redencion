import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  imports: [],
  templateUrl: './footer-nav.html',
})
export class FooterNav {
  readonly title = input.required<string>();
  readonly version = input.required<string>();
}
