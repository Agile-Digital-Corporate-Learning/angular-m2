import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SectionOneComponent} from "./section-one/section-one.component";
import {SectionTwoComponent} from "./section-two/section-two.component";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {SectionThreeComponent} from "./section-three/section-three.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SectionOneComponent, SectionTwoComponent, MatTabGroup, MatTab, SectionThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-m2';
}
