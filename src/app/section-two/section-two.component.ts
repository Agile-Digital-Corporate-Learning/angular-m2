import { Component, OnInit } from '@angular/core';
import {SyncHttpService} from "../../services/sync-http.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-section-two',
  standalone: true,
  imports: [
    FormsModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatButton,
    CommonModule
  ],
  templateUrl: './section-two.component.html',
  styleUrl: './section-two.component.css'
})
export class SectionTwoComponent implements OnInit {
  query: string = ""
  chats: string[] = []

  isSending: boolean = false;

  constructor(private syncHttpService: SyncHttpService) {}

  ngOnInit(): void {

  }

  async handleSend() {
    this.isSending = true;
    this.chats.push(this.query)
    const answer = await this.syncHttpService.generateContent(this.query);
    this.query = "";
    this.chats.push(answer)
    this.isSending = false;
  }
}
