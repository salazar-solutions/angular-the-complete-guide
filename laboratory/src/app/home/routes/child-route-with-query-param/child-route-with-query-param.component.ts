import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-route-with-query-param',
  templateUrl: './child-route-with-query-param.component.html',
  styleUrls: ['./child-route-with-query-param.component.css'],
})
export class ChildRouteWithQueryParamComponent implements OnInit {
  queryParam: string = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.queryParam = params['query'])
    );
  }

  navigate(queryParam: string) {
    this.router.navigate(['./'], {
      queryParams: { query: queryParam },
      relativeTo: this.activatedRoute,
    });
  }
}
