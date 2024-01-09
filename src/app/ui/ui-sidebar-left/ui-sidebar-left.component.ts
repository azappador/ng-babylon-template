import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-sidebar-left',
  templateUrl: './ui-sidebar-left.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class UiSidebarLeftComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
