import { Component } from '@angular/core';
import { from, interval, observable, Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { DataServiceService } from './service/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(dataService: DataServiceService) {}
  // Using Constructor

  // myObservable = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.error(new Error('Something went wrong! Try Later'));
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.next(6);
  //   }, 6000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 3000);
  // });

  // Using Create Method

  // myObservable = Observable.create((observer) => {
  //   setTimeout(() => {
  //     observer.next(1);
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next(2);
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next(3);
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('Something went wrong! Try Later'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next(4);
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next(5);
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.next(6);
  //   }, 6000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 3000);
  // });

  //of operator

  // array1 = [1, 2, 3, 4, 5];
  // myObservable = of(this.array1, 'Hello');

  //from operator

  // myObservable = from(this.array1).pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return val >= 11;
  //   })
  // );

  // TransformedObservable = this.myObservable.pipe(
  //   map((val) => {
  //     return val * 5;
  //   }),
  //   filter((val) => {
  //     return val >= 11;
  //   })
  // );

  // FilteredObservable = this.TransformedObservable.pipe(
  //   filter((val) => {
  //     return val >= 11;
  //   })
  // );

  CounterObs = interval(1000);
  counterSub;
  ngOnInit() {
    // this.myObservable.subscribe(
    //   (val) => {
    //     console.log(val);
    //   },
    //   (error) => {
    //     alert(error);
    //   },
    //   () => {
    //     alert('Complete');
    //   }
    // );
  }

  Subscribe(): void {
    this.counterSub = this.CounterObs.subscribe((val) => {
      console.log(val);
    });
  }
  UnSubscribe(): void {
    this.counterSub.unsubscribe();
  }
}
