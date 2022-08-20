import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor() {}

  ngOnInit() {
    this.isLoading = true;
  }
}
