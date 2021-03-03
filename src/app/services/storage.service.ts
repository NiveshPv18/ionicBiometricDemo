import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setItem(key, value) {
    return await Storage.set({
      key: key,
      value: value
    });
  }

  async getItem(key) {
    return await Storage.get({ key: key });
  }

  async removeItem(key) {
    return await Storage.remove({ key: key });
  }
}
