import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public Registration = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    gender: new FormControl(""),
    courses: new FormControl(""),
    training_mode: new FormControl(""),
     address: new FormGroup(
      {
        city: new FormControl(""),
        state: new FormControl(""),
        postalcode: new FormControl("")
      }
    ),
 
  })

  gender:String[] =["Male","Female"] 
  courses:String[] = ["Java","Python","Angular","ExpressJs"]
  training_mode:String[] =["online","offline"]

  onSubmit() {
    // Handle form submission logic here
    console.log(this.Registration.value);
  }

}
