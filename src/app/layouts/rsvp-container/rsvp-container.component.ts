import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RsvpDialogComponent } from 'src/app/features/rsvp/components/rsvp-dialog/rsvp-dialog.component';

@Component({
  selector: 'app-rsvp-container',
  standalone: true,
  imports: [CommonModule, RsvpDialogComponent],
  templateUrl: './rsvp-container.component.html',
  styleUrls: ['./rsvp-container.component.scss']
})
export class RsvpContainerComponent {
  public showDialog = false;

  public onRsvpClick($event: Event): void {
    $event.preventDefault();
    this.showDialog = true;
  }
}
