import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {DataService} from "../../services/data.service";
import {SyncHttpService} from "../../services/sync-http.service";

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatIconButton,
    MatIcon,
    MatLabel
  ],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent implements OnInit {

  desc: string = "";

  constructor(public dataService: DataService,
              private syncHttpService: SyncHttpService
  ) {}

  ngOnInit(): void {
    this.desc = this.dataService.dataVM.description
    this.syncHttpService.generateContent().subscribe(a=> {
      console.log(a)
    });
  }

  protected readonly JSON = JSON;

  onNameChange($event: any) {
    this.dataService.updateDesc($event);
  }
}
