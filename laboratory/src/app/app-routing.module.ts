import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionComponent } from './home/content-projection/content-projection.component';
import { DataBindingComponent } from './home/data-binding/data-binding.component';
import { DirectiveComponent } from './home/directive/directive.component';
import { DomComponent } from './home/dom/dom.component';
import { DynamicComponent } from './home/dynamic/dynamic.component';
import { FormsComponent } from './home/forms/forms.component';
import { ClientFormComponent } from './home/forms/reactive/client-form/client-form.component';
import { ListComponent } from './home/forms/reactive/list/list.component';
import { HomeComponent } from './home/home.component';
import { HttpclientComponent as HttpClientComponent } from './home/httpclient/httpclient.component';
import { LifecycleComponent } from './home/lifecycle/lifecycle.component';
import { PipesComponent } from './home/pipes/pipes.component';
import { ChildRoutePreserveQueryParamComponent } from './home/routes/child-route-preserve-query-param/child-route-preserve-query-param.component';
import { ChildRouteWithParamComponent } from './home/routes/child-route-with-param/child-route-with-param.component';
import { ChildRouteWithQueryParamComponent } from './home/routes/child-route-with-query-param/child-route-with-query-param.component';
import { ChildRouteComponent } from './home/routes/child-route/child-route.component';
import { AuthChildGuardService } from './home/routes/guards/auth-child-guard.service';
import { AuthGuardService } from './home/routes/guards/auth-guard.service';
import { CanActivateChildGuardComponent } from './home/routes/guards/can-activate-child-guard/can-activate-child-guard.component';
import { CanActivateGuardComponent } from './home/routes/guards/can-activate-guard/can-activate-guard.component';
import { CanDeacivateGuardService } from './home/routes/guards/can-deacivate-guard.service';
import { CanDeactivateGuardComponent } from './home/routes/guards/can-deactivate-guard/can-deactivate-guard.component';
import { GuardsComponent } from './home/routes/guards/guards.component';
import { RoutesComponent } from './home/routes/routes.component';
import { ServicesComponent } from './home/services/services.component';
import { SubjectsComponent } from './home/subjects/subjects.component';
import { TemplateExpressionComponent } from './home/template-expression/template-expression.component';
import { TemplateStatementComponent } from './home/template-statement/template-statement.component';
import { UnauthorizedComponent } from './home/unauthorized/unauthorized.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'content-projection', component: ContentProjectionComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'template-expression', component: TemplateExpressionComponent },
  { path: 'template-statement', component: TemplateStatementComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'data-biding', component: DataBindingComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'dom', component: DomComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'routes',
    component: RoutesComponent,
    children: [
      { path: 'child', component: ChildRouteComponent },
      { path: 'childWithParam/:arg', component: ChildRouteWithParamComponent },
      { path: 'childWithQuery', component: ChildRouteWithQueryParamComponent },
      {
        path: 'childPeserveQuery',
        component: ChildRoutePreserveQueryParamComponent,
      },
      {
        path: 'Guards',
        children: [
          {
            path: '',
            component: GuardsComponent,
          },
          {
            path: 'canActivateGuard',
            component: CanActivateGuardComponent,
            canActivate: [AuthGuardService],
          },
          {
            path: 'canActivateChildGuard',
            canActivateChild: [AuthChildGuardService],
            children: [{ path: '', component: CanActivateChildGuardComponent }],
          },
          {
            path: 'canDeactivate',
            component: CanDeactivateGuardComponent,
            canDeactivate: [CanDeacivateGuardService],
          },
        ],
      },
    ],
  },
  { path: 'subjects', component: SubjectsComponent },

  {
    path: 'forms',
    children: [
      { path: '', component: FormsComponent },
      {
        path: 'reactive',
        children: [
          { path: '', component: ListComponent },
          { path: 'create', component: ClientFormComponent },
          { path: 'edit/:index', component: ClientFormComponent },
        ],
      },
    ],
  },
  { path: 'httpClient', component: HttpClientComponent },
  { path: 'Dynamic-components', component: DynamicComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
