import { Injectable } from '@angular/core';
import { ToastrService, IndividualConfig } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private toastr: ToastrService) { }

  success(message: string, title: string, options?: Partial<IndividualConfig>) {
    this.toastr.success(message, title, options);
  }

  error(message: string, title: string, options?: Partial<IndividualConfig>) {
    this.toastr.error(message, title, options);
  }



}
