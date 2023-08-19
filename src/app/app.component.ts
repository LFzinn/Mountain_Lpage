import { Component, AfterViewInit } from '@angular/core';
import { ModalService } from './services/modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'mountain';


  constructor(public modalService: ModalService) { }



  closeModal(): void {
    this.modalService.closeModal();
  }

  backHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth'  });
  }

  backSection1() {
    document.getElementById('section1')?.scrollIntoView({ behavior: 'smooth'});
  }

  backSection2() {
    document.getElementById('section2')?.scrollIntoView({ behavior: 'smooth'});

  }

  backSection3() {
    document.getElementById('section3')?.scrollIntoView({ behavior: 'smooth'});

  }


  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('entry');
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach((el) => observer.observe(el));
  }




}
