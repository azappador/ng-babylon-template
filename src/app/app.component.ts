import { Component } from '@angular/core';
import { EngineComponent } from './engine/engine.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UiInfobarBottomComponent } from './ui/ui-infobar-bottom/ui-infobar-bottom.component';
import { UiInfobarTopComponent } from './ui/ui-infobar-top/ui-infobar-top.component';
import { UiSidebarLeftComponent } from './ui/ui-sidebar-left/ui-sidebar-left.component';
import { UiSidebarRightComponent } from './ui/ui-sidebar-right/ui-sidebar-right.component';
import { UiComponent } from './ui/ui.component';
import { WindowRefService } from './services/window-ref.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ 
    RouterOutlet,
    CommonModule,
    EngineComponent,
    UiComponent,
    UiInfobarBottomComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent
  ],
  providers: [ WindowRefService ]
})
export class AppComponent {}
