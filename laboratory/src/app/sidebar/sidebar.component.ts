import { Component, OnInit } from '@angular/core';
import { routes } from '../app-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public paths: string[] = [];

  constructor() {}

  ngOnInit(): void {
    routes.forEach((route) => {
      this.paths.push(route.path!);
    });
  }
}
