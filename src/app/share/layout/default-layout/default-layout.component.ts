import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {
  isLogged: boolean;

  constructor(public router: Router) {
    this.isLogged = localStorage.getItem('isLogged') === 'true';
  }
}
