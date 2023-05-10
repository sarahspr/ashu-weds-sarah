import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Device } from './core/models/device.interface';
import { DeviceDetectorService } from './core/services/device-detector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public deviceType$: Observable<Device> = this.deviceDetectorService.deviceType$;
  constructor(private deviceDetectorService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.deviceDetectorService.init();
  }
}
