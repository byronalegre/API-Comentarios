import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = "https://www.braindw.com/wp-content/uploads/2017/08/logo-musimundo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
