import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rsvp-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rsvp-dialog.component.html',
  styleUrls: ['./rsvp-dialog.component.scss']
})
export class RsvpDialogComponent {
  @Input() dialogHidden = true;
  @Output() closeDialog: EventEmitter<Event> = new EventEmitter<Event>();
  @ViewChild('rsvpFormContainer') rsvpFormContainer: ElementRef;

  public ngAfterViewInit(): void {
    this.setRsvpScript();
  }

  public onDialogCloseClick($event: Event): void {
    $event.preventDefault();
    this.closeDialog.emit($event);
    this.dialogHidden = true;
  }

  /**
   * Appends rsvp script
   */
  private setRsvpScript(): void {
    const container = this.rsvpFormContainer.nativeElement;
    const script = document.createElement('script');

    // <script type="text/javascript" src="https://test-test.rsvpify.com/embed"></script>;
    script.setAttribute('src', 'https://test-test.rsvpify.com/embed');
    container.appendChild(script);
  }
}
