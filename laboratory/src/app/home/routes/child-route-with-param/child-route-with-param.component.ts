import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child-route-with-param',
  templateUrl: './child-route-with-param.component.html',
  styleUrls: ['./child-route-with-param.component.css'],
})
export class ChildRouteWithParamComponent implements OnInit {
  parameter: string = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => (this.parameter = params['arg'])
    );
  }

  navigate(param: string) {
    this.router.navigate(['../', param], {
      relativeTo: this.activatedRoute,
    });
  }
}
