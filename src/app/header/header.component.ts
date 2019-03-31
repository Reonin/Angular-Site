import { Component, OnInit } from '@angular/core';
import { faHome,faGamepad, faFileAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
faHome  = faHome;
 faGamepad =faGamepad;
  faFileAlt = faFileAlt;

  navbarOpen = false;

    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }

  constructor() { }

  ngOnInit() {
  }

}
