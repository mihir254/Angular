import { Component } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = "";
  buttonDisabled = false;

  handleOnChange ( ) {
    if (this.value === 'submitted') {
      this.buttonDisabled = true;
    }
  }
}
