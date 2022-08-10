import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  // onSubmit(form:NgForm){
  //   console.log(form.value);
  // }

  @ViewChild('f') signupForm: NgForm;
  onSubmit() {
    console.log(this.signupForm);
  }
}
