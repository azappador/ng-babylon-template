import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-infobar-top',
  templateUrl: './ui-infobar-top.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class UiInfobarTopComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
