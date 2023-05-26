import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy, AfterViewInit {
  public ringRadius = 180;
  private circumference = this.ringRadius * 2 * Math.PI;
  @ViewChild('progressRingFiller') private ringFiller: ElementRef;

  constructor(private renderer: Renderer2) {}
  public ngOnInit(): void {
    this.renderer.addClass(document.body, 'no-scroll');
  }

  public ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  public ngAfterViewInit(): void {
    this.animateProgress();
  }

  private animateProgress(): void {
    console.log(this.ringFiller.nativeElement);
    const circle = this.ringFiller.nativeElement;

    if (circle) {
      circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
      circle.style.strokeDashoffset = `${this.circumference}`;
    }

    requestAnimationFrame(() => {
      circle.style.strokeDashoffset = 60;
    });
  }
}
