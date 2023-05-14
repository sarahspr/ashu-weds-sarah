import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rsvp-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rsvp-container.component.html',
  styleUrls: ['./rsvp-container.component.scss']
})
export class RsvpContainerComponent implements AfterViewInit {
  @ViewChild('rsvpFormContainer') rsvpFormContainer: ElementRef;

  public ngAfterViewInit(): void {
    this.setRsvpScript();
  }

  private setRsvpScript(): void {}
}
