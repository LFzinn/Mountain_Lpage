import { Injectable } from '@angular/core';

import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      name:['', [Validators.required, Validators.maxLength(14)]],
      email:['', [Validators.required, Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)]],
    });
  }


    getForm():FormGroup {
      return this.formData;
    }



}
