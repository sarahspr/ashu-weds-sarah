import { Directive, ElementRef, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appEventSfx]',
  standalone: true
})
export class EventSfxDirective {
  // TODO: add audio source dynamically
  private audioUrl = 'assets/audio/interface.mp3';
  constructor(private elementRef: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.play(this.audioUrl);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.stop();
  }

  @ViewChild('audioEl') private audioElement: ElementRef;

  private play(audioUrl: string): void {
    this.elementRef.nativeElement.insertAdjacentHTML(
      'afterbegin',
      `<audio id="audio-directive" #audioEl><source src="${audioUrl}"><source></audio>`
    );
    const audioEl = this.elementRef.nativeElement.querySelectorAll('#audio-directive');
    audioEl?.[0].play();
  }

  private stop(): void {
    // TODO: BUG - audio el is not getting removed
    this.audioElement?.nativeElement.remove();
  }
}
