import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  dataEmitter = new EventEmitter<string>();
  raisedDataEventEmitter(data: string): void {
    this.dataEmitter.emit(data);
  }
}
