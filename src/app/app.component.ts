import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.error(new Error('Something went wrong! Try Later'));
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
    setTimeout(() => {
      observer.next(6);
    }, 6000);
    setTimeout(() => {
      observer.complete();
    }, 3000);
  });
  ngOnInit() {
    this.myObservable.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        alert(error);
      },
      () => {
        alert('Complete');
      }
    );
  }
}
