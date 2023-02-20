import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  // dataEmitter = new EventEmitter<string>();
  dataEmitter = new Subject<string>();
  raisedDataEventEmitter(data: string): void {
    this.dataEmitter.next(data);
  }
}
