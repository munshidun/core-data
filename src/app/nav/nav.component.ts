import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  simpleLinks: string[] = [
    'https://angular.io/',
    'https://material.angular.io/',
    'https://reactjs.org/'
  ];

  constructor() { }

  ngOnInit() {
  }

}
