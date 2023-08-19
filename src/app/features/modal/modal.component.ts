import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { ModalService } from 'src/app/services/modal.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  formData = this.formService.getForm();

  constructor(private modalService:ModalService, private formService: FormService,  private toastrService: ToastrService) { }

  closeModal(): void {
    this.modalService.closeModal();
  }


  send() {
    this.formData.markAllAsTouched();

    if(this.formData.get('email')?.valid){
      const toastrOptions = {
        timeOut: 3000,
        positionClass: 'toast-bottom-center',
        toastClass: 'ngx-toastr',
        closeButton: true,
        progressBar:true,
        tapToDismiss: true,
      }


      this.toastrService.success('Email sent!', 'Success', toastrOptions);
      this.formData.get('email')?.reset();
      this.modalService.closeModal();

    }else if(this.formData.get('email')?.invalid) {
      const toastrOptions = {
        timeOut: 3000,
        positionClass: 'toast-bottom-center',
        toastClass: 'ngx-toastr',
        closeButton: true,
        progressBar:true,
        tapToDismiss: true,
      }
      this.toastrService.error('Email Invalid!', 'Error', toastrOptions);
    }
  }


}
