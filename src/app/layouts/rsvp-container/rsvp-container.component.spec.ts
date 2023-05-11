import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpContainerComponent } from './rsvp-container.component';

describe('RsvpContainerComponent', () => {
  let component: RsvpContainerComponent;
  let fixture: ComponentFixture<RsvpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RsvpContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsvpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
