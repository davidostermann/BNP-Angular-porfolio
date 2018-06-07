import { MenuType } from './menu-type';
import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() {}

  selectedMenu: MenuType = MenuType.BIO;

  list: Menu[] = [
    {
      id: MenuType.BIO,
      label: 'Bio',
      title: 'Bio',
      content: 'Lorem ipsum ... bio',
      position: 'header'
    },
    {
      id: MenuType.REAL,
      label: 'Réalisations',
      title: 'Réalisations',
      content: 'Lorem ipsum ... real',
      position: 'header'
    },
    {
      id: MenuType.CONTACT,
      label: 'Contact',
      title: 'Contact',
      content: 'Lorem ipsum ... contact',
      position: 'header'
    },
    {
      id: MenuType.MENTIONS,
      label: 'Mentions légales',
      title: 'Mentions légales',
      content: 'Lorem ipsum ... mentions',
      position: 'footer'
    },
    {
      id: MenuType.CONTRIB,
      label: 'Contributeurs',
      title: 'Contributeurs',
      content: 'Lorem ipsum ... contributeurs...',
      position: 'footer'
    }
  ];
  getList(position): Menu[] {
    return this.list.filter(item => item.position === position);
  }
}
