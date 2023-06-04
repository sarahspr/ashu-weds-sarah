import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Device } from 'src/app/core/models/device.interface';
import { DeviceDetectorService } from 'src/app/core/services/device-detector.service';
import { RsvpContainerComponent } from '../../layouts/rsvp-container/rsvp-container.component';
import { PhotosContainerComponent } from '../../layouts/photos-container/photos-container.component';
import { RegistryComponent } from '../../features/registry/registry.component';
import { AppStateService } from 'src/app/app-state.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  imports: [CommonModule, NgOptimizedImage, RsvpContainerComponent, PhotosContainerComponent, RegistryComponent]
})
export class HomepageComponent {
  public deviceType$: Observable<Device> = this.deviceDetectorService.deviceType$;

  constructor(private deviceDetectorService: DeviceDetectorService, public appStateService: AppStateService) {}

  public onImageLoaded($event: any) {
    this.appStateService.setHeroImageLoaded($event);
  }
}
