import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/app-routing.module';

@Component({
  selector: 'app-routes-component-sidebar',
  templateUrl: './routes-component-sidebar.component.html',
  styleUrls: ['./routes-component-sidebar.component.css'],
})
export class RoutesComponentSidebarComponent implements OnInit {
  paths: string[] = [];
  constructor() {}

  ngOnInit(): void {
    const route = routes.find((r) => r.path === 'routes')!;
    for (let child of route.children!) {
      if (child.data !== undefined && !child.data.sidebarDisplay) continue;
      const path = child.path!.replace(/:.*/, '0');
      this.paths.push(path);
    }
  }
}
