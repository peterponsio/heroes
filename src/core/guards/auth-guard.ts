import { Injectable } from "@angular/core";
import { Router, UrlTree } from "@angular/router";
import { LocalStorageManager } from "@utils/local-storage-manager";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuardService {

    constructor(){}

    canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.isAuthUser()
    }

    
    isAuthUser(): boolean {
        return true
    }      
    
}
