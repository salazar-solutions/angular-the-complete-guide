import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-route-preserve-query-param',
  templateUrl: './child-route-preserve-query-param.component.html',
  styleUrls: ['./child-route-preserve-query-param.component.css'],
})
export class ChildRoutePreserveQueryParamComponent implements OnInit {
  queryParam: string = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params) => (this.queryParam = params['query'])
    );
  }

  navigate() {
    this.router.navigate(['../childWithQuery'], {
      queryParams: { query: this.queryParam },
      queryParamsHandling: 'preserve',
      relativeTo: this.activatedRoute,
    });
  }
}
