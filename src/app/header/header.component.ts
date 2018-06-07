import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuType } from '../menu-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit() {}

  selectMenu(name: MenuType) {
    console.log('click : ', name);
    this.menuService.selectedMenu = name;
  }
}
