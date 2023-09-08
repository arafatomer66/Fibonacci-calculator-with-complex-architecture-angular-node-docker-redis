import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fib-calculator',
  templateUrl: './fib-calculator.component.html',
  styleUrls: ['./fib-calculator.component.css']
})
export class FibCalculatorComponent {
  public entries:any = [];
  myForm: FormGroup;

  constructor(public data: DataService, private fb: FormBuilder, private http: HttpClient) {
    this.myForm = this.fb.group({
      index: ['', Validators.required]
    });
  }

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

  async onSubmit() {
    this.http.post('api/values',{
      index: this.myForm.value.index
    });

    this.myForm.reset();
  }
}
