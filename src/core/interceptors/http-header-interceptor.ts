import { environment } from './../../environments/environment.defaults';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageManager } from '@utils/local-storage-manager';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeadersInterceptorService implements HttpInterceptor{

  private publicEndpoints = environment.publicEndpoints;

  constructor(private storageManager: LocalStorageManager) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.setHeaders(req))
      .pipe(
        switchMap(headers => next.handle(req.clone({headers}))) // 
      )
  }
  //utiliza un behaviour subject para obtener el idioma (this.localStorage.language.value)
  // al hacer setLanguage (LocalStorageService) hace un next(idioma_actual)
  
  private async setHeaders(request: HttpRequest<any>): Promise<HttpHeaders>  {
    let { headers } = request
    //set de header si es un endpoint publico o no
    if (!this.isPublicEndPoint(request)) {
      const authInfo = this.storageManager.get('auth_data')
      if (authInfo) {     
        const bearerToken = JSON.parse(authInfo)  ??   {}
        headers = headers.set("Authorization", `Bearer ${bearerToken.accessToken}`);
      }
    } else {
      headers = headers.delete("Authorization");
    }
    // headers = headers.set('LanguageCode', languageCode)
    return Promise.resolve(headers)
  }

  private isPublicEndPoint(request: HttpRequest<any>) {
    return this.publicEndpoints.find((ep) => {
        return request.method === ep.method && request.url.includes(ep.endpoint);
    });
  }

}
