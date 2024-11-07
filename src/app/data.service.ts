import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: IData = {
    id: 1,
    count: 0,
    description: "todo",
    record: []

  }

  get dataVM() {
    return this.data;
  }

  constructor() {

  }
}

interface IRecord {
  oldValue: String;
  time: Date;
}

interface IData {
  id: number;
  description: string;
  count: number;
  record: IRecord[]
}
