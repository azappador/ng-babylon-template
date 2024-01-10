import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './engine.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  standalone: true,
  imports: [CommonModule],
  providers: [EngineService],
})
export class EngineComponent implements OnInit {  

  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: any = ElementRef<HTMLCanvasElement>;
  public constructor(private engServ: EngineService) { }

  public ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
  }
}
