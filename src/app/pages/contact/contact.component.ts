import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });
  }
}
