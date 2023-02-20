import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component {
  constructor(private dataService: DataServiceService) {}
  entered: string = '';
  btnClicked(): void {
    this.dataService.raisedDataEventEmitter(this.entered);
  }
}
