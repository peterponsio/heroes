import {Injectable, Injector} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorDialogComponent } from '@shared/error-dialog/error-dialog.component';


@Injectable()
export class HttpErrorInterceptorProvider implements HttpInterceptor {

    constructor(public dialog: MatDialog,private transtale: TranslateService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((err, caught) => this.handleHttpError(err)));
    }

    private handleHttpError(error: HttpErrorResponse): Observable<any> {
        console.error('RAW HTTP ERROR | ', error);
        if(error.status != 401){
            this.showSimpleErrorAlert(error.error);
        }
        throw error;
    }

    //custom error popover
    private async showSimpleErrorAlert(errorHttp: any) {
        const {error,message,statusCode} = errorHttp
        
        const dialog = this.dialog.open(ErrorDialogComponent,{
            data: message ?? this.transtale.instant("HTTP_ERRORS.GENERIC")
        })
        setTimeout(() => {
            dialog.close()
        }, 3000);
    }
}
