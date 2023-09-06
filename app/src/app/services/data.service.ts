import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  state = {
    seenIndexes: [] as any,
    values: {},
    index: ""
  }

  ngOnInIt() {
    this.fetchIndexes();
    this.fetchValues();
  }

  async fetchValues() {
    const values = await this.http.get('/api/values/current');
    values.subscribe((values) => {
        this.state.values = values;
    });
  }

  async fetchIndexes() {
    const seenIndexes = await this.http.get('/api/values/all');
    seenIndexes.subscribe((values) => {
      this.state.seenIndexes = values;
  });
  }
}
