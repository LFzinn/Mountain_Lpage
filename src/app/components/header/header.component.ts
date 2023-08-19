import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  formData = this.formService.getForm();


  constructor(private modalService: ModalService, private formService: FormService) {}

  openModal(): void {
    this.modalService.openModal();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
