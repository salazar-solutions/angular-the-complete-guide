import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing/routing.module';
import { AuthorizationInterceptor } from './routing/authorization.interceptor';
import { LogInterceptor } from './routing/log.interceptor';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
