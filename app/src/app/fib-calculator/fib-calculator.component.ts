import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-fib-calculator',
  templateUrl: './fib-calculator.component.html',
  styleUrls: ['./fib-calculator.component.css']
})
export class FibCalculatorComponent {
  public entries:any = [];

  constructor(public data: DataService) {}

  getSeenIndexes() {
    return this.data.state.seenIndexes.map(({ number }) => {
      return number;
    }).join(', ');
  }

  getValues() {
    // from redis
    for (let key in this.data.state.values) {
      this.entries.push({
        key : this.data.state.values[key]
      });
    }
  }
}
