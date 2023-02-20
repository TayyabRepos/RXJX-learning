import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  constructor(private dataService: DataServiceService) {}
  inputValue: string = '';

  ngOnInit() {
    this.dataService.dataEmitter.subscribe((val) => {
      this.inputValue = val;
    });
  }
}
