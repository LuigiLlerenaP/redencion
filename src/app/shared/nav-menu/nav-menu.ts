import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type NavMenuItem = {
  label: string;
  route: string;
  icon?: string;
};

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.html',
})
export class NavMenu {
  readonly title = input.required<string>();
  readonly menuItems = input.required<NavMenuItem[]>();
}
