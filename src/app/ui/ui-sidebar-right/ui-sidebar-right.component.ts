import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-sidebar-right',
  templateUrl: './ui-sidebar-right.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class UiSidebarRightComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}
