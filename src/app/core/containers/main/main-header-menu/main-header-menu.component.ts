import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header-menu',
  templateUrl: './main-header-menu.component.html',
  styleUrls: ['./main-header-menu.component.scss']
})
export class MainHeaderMenuComponent implements OnInit {

  menuOpen = false;
  options = [
    'Dashboard',
    'Resumo',
    'Configurações'
  ]

  constructor() { }

  ngOnInit(): void {
  }


  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
