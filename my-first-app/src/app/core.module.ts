import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthorizationInterceptor } from './routing/authorization.interceptor';
import { LogInterceptor } from './routing/log.interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthorizationInterceptor,
    },
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: LogInterceptor },
  ],
})
export class CoreModule {}
