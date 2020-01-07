import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p class="alert alert-warning">{{ message }}</p>`,
  styles: [`.alert{color:red}`]
})
export class WarningAlertComponent implements OnInit {
  message:string = "This is a warning message"


  constructor() {

  }

  ngOnInit() {
  }

}
