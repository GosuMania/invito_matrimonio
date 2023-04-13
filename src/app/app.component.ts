import { Component } from '@angular/core';
import {SpinnerService} from "./services/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private spinnerSerive: SpinnerService) {
    this.spinnerSerive.requestStarted();
    setTimeout(() => {
      this.spinnerSerive.requestEnded();
    }, 3100);
  }
}
