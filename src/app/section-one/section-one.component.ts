import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatLabel} from "@angular/material/form-field";

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
export class SectionOneComponent {
  name: string = "";
}
