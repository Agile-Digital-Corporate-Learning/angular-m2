import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-section-one',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent {
  name: string = "";
}
