import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T = any>(key: string): T | undefined {
    try {
      const storage = localStorage.getItem(key);
      return JSON.parse(storage ?? '');
    } catch (e) {
      return undefined;
    }
  }
}
