import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroModel } from '@models/hero.models';
import { LocalStorageManager } from '@utils/local-storage-manager';

import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.defaults';

@Injectable({
  providedIn: 'root'
})
export class RefreshSessionInterceptorService implements HttpInterceptor {

  private publicEndpoints = environment.publicEndpoints

  constructor(
    private storageManager: LocalStorageManager,
    private http:HttpClient
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // si es una llamada de assets se hace un handle y se omite 
    if (this.isPublicEndPoint(req)) {
      return next.handle(req)
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          return from(this.refreshCall())
          .pipe(
            switchMap((newToken) => {
              return next.handle(req.clone({
                headers: req.headers.set("Authorization", `Bearer ${newToken.accessToken}`)
              }))
            }),
          )
        }
        return throwError(error);
      })
      )
      
  }
  
  async refreshCall(): Promise<any>{

    const authInfo: HeroModel  = JSON.parse(this.storageManager.get('user_data') ?? "") 
    const endpoint = `${environment.baseUrl.DEV}/auth/log-in`
    
    
    const body = {
      email: '',
      password: ''
    }
    return new Promise((resolve, reject) => {
      this.http.post<any>(endpoint,body)
      .pipe(
        tap(res=> console.log("res",res)
        )
      )
      .subscribe(response => {
        this.storageManager.set('auth_data',JSON.stringify(response)) 
        resolve(response)
      }, err => {
        reject(err)
      })
    });
  }

  private isPublicEndPoint(request: HttpRequest<any>) {
    return this.publicEndpoints.find((ep) => {
        return request.method === ep.method && request.url.includes(ep.endpoint);
    });
  }

}
