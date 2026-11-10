import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoNav } from '../../../../shared/logo-nav/logo-nav';
import { NavMenu, NavMenuItem } from '../../../../shared/nav-menu/nav-menu';
import { FooterNav } from '../../../../shared/footer-nav/footer-nav';
import { HeaderNav } from '../../../../shared/header-nav/header-nav';

@Component({
  selector: 'app-redencion-layout',
  imports: [RouterOutlet, LogoNav, NavMenu, FooterNav, HeaderNav],
  templateUrl: './redencion-layout.html',
})
export default class RedencionLayout {
  protected menuItems: NavMenuItem[] = [
    { label: 'Gestión', route: '/redenciones/gestion', icon: 'fa-solid fa-list-check' },
    {
      label: 'Consulta',
      route: '/redenciones/consulta',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];
}
