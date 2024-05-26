import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class LocalStorageManager {

    constructor() {}

    set(key:string,value:string){
        return localStorage.setItem(`${key}`,`${value}`)
    }

    get(key:string){
        return localStorage.getItem(key)
    }

    clearKeys(){
       return localStorage.clear()
    }

}