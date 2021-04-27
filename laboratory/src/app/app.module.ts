import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentProjectionComponent } from './home/content-projection/content-projection.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SingleShotComponent } from './home/content-projection/single-shot/single-shot.component';
import { MultiShotComponent } from './home/content-projection/multi-shot/multi-shot.component';
import { TemplateStatementComponent } from './home/template-statement/template-statement.component';
import { TemplateExpressionComponent } from './home/template-expression/template-expression.component';
import { LifecycleComponent } from './home/lifecycle/lifecycle.component';
import { DataBindingComponent } from './home/data-binding/data-binding.component';
import { InputChildComponent } from './home/data-binding/input-child/input-child.component';
import { EventChildComponent } from './home/data-binding/event-child/event-child.component';
import { TwoWayBindingComponent } from './home/data-binding/two-way-binding/two-way-binding.component';
import { DirectiveComponent } from './home/directive/directive.component';
import { AttributeDirectiveDirective } from './home/directive/attribute-directive.directive';
import { StructuralDirectiveDirective } from './home/directive/structural-directive.directive';
import { DomComponent } from './home/dom/dom.component';
import { DomChildComponent } from './home/dom/dom-child/dom-child.component';
import { ServicesComponent } from './home/services/services.component';
import { ActiveUsersComponent } from './home/services/active-users/active-users.component';
import { InactiveUsersComponent } from './home/services/inactive-users/inactive-users.component';
import { RoutesComponent } from './home/routes/routes.component';
import { ChildRouteComponent } from './home/routes/child-route/child-route.component';
import { ChildRouteWithParamComponent } from './home/routes/child-route-with-param/child-route-with-param.component';
import { RoutesComponentSidebarComponent } from './home/routes/routes-component-sidebar/routes-component-sidebar.component';
import { ChildRouteWithQueryParamComponent } from './home/routes/child-route-with-query-param/child-route-with-query-param.component';
import { ChildRoutePreserveQueryParamComponent } from './home/routes/child-route-preserve-query-param/child-route-preserve-query-param.component';
import { GuardsComponent } from './home/routes/guards/guards.component';
import { CanActivateGuardComponent } from './home/routes/guards/can-activate-guard/can-activate-guard.component';
import { CanActivateChildGuardComponent } from './home/routes/guards/can-activate-child-guard/can-activate-child-guard.component';
import { CanDeactivateGuardComponent } from './home/routes/guards/can-deactivate-guard/can-deactivate-guard.component';
import { ResolveGuardComponent } from './home/routes/guards/resolve-guard/resolve-guard.component';
import { CanLoadGuardComponent } from './home/routes/guards/can-load-guard/can-load-guard.component';
import { UnauthorizedComponent } from './home/unauthorized/unauthorized.component';
import { SubjectsComponent } from './home/subjects/subjects.component';
import { SubjectActiveUsersComponent } from './home/subjects/subject-active-users/subject-active-users.component';
import { SubjectInactiveUsersComponent } from './home/subjects/subject-inactive-users/subject-inactive-users.component';
import { FormsComponent } from './home/forms/forms.component';
import { ReactiveComponent } from './home/forms/reactive/reactive.component';
import { ListComponent } from './home/forms/reactive/list/list.component';
import { ClientFormComponent } from './home/forms/reactive/client-form/client-form.component';
import { BackButtonDirective } from './shared/back-button.directive';
import { FormErrorDirective } from './home/forms/reactive/form-error.directive';
import { FormControlErrorDirective } from './home/forms/reactive/form-control-error.directive';
import { PipesComponent } from './home/pipes/pipes.component';
import { FilterEmployeesPipe } from './home/pipes/filter-employees.pipe';
import { SorterPipe } from './home/pipes/sorter.pipe';
import { ReversePipe } from './home/pipes/reverse.pipe';
import { HttpclientComponent } from './home/httpclient/httpclient.component';
import { UrlInterceptor } from './home/httpclient/url.interceptor';
import { ConfirmModalComponent } from './home/httpclient/confirm-modal/confirm-modal.component';
import { LogInterceptor } from './home/httpclient/log.interceptor';
import { DynamicComponent } from './home/dynamic/dynamic.component';
import { ConfirmationDialogComponent } from './home/dynamic/confirmation-dialog/confirmation-dialog.component';
import { AnchorDirective } from './home/dynamic/anchor.directive';
import { FormComponent } from './home/dynamic/formdialog/form/form.component';
import { FormDialogComponent } from './home/dynamic/formdialog/form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentProjectionComponent,
    SidebarComponent,
    SingleShotComponent,
    MultiShotComponent,
    TemplateStatementComponent,
    TemplateExpressionComponent,
    LifecycleComponent,
    DataBindingComponent,
    InputChildComponent,
    EventChildComponent,
    TwoWayBindingComponent,
    DirectiveComponent,
    AttributeDirectiveDirective,
    StructuralDirectiveDirective,
    DomComponent,
    DomChildComponent,
    ServicesComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutesComponent,
    ChildRouteComponent,
    ChildRouteWithParamComponent,
    RoutesComponentSidebarComponent,
    ChildRouteWithQueryParamComponent,
    ChildRoutePreserveQueryParamComponent,
    GuardsComponent,
    CanActivateGuardComponent,
    CanActivateChildGuardComponent,
    CanDeactivateGuardComponent,
    ResolveGuardComponent,
    CanLoadGuardComponent,
    UnauthorizedComponent,
    SubjectsComponent,
    SubjectActiveUsersComponent,
    SubjectInactiveUsersComponent,
    FormsComponent,
    ReactiveComponent,
    ListComponent,
    ClientFormComponent,
    BackButtonDirective,
    FormControlErrorDirective,
    FormErrorDirective,
    PipesComponent,
    FilterEmployeesPipe,
    SorterPipe,
    ReversePipe,
    HttpclientComponent,
    ConfirmModalComponent,
    DynamicComponent,
    FormDialogComponent,
    ConfirmationDialogComponent,
    AnchorDirective,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: UrlInterceptor },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: LogInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
