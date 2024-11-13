import { Component } from '@angular/core';
import {CustomInputComponent} from "./custom-input/custom-input.component";
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-section-three',
  standalone: true,
  imports: [
    CustomInputComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.css'
})
export class SectionThreeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      count: 99,
      username: "test"
    });
  }

  onInputChange($event: Event) {

  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
