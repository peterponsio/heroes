import { RefreshSessionInterceptorService } from './refresh-session-interceptor.service';
import { HttpErrorInterceptorProvider } from './http-error-interceptor';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from '@shared/shared-module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptorService } from './http-header-interceptor';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatDialogModule,
        SharedModule
    ],
    exports:[],
    providers: [
        //{provide: HTTP_INTERCEPTORS, useClass: RefreshSessionInterceptorService, multi: true},
        //{provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptorService, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptorProvider, multi: true},
       
    ]
})
export class InterceptorsModule {}
