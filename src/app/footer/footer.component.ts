import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuType } from '../menu-type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(public menuService: MenuService) {}

  ngOnInit() {}

  selectMenu(name: MenuType) {
    console.log('click : ', name);
    this.menuService.selectedMenu = name;
  }
}
