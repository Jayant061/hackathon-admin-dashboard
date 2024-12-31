import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  get imagePath(){
    return "../../../../assets/icons/logo.jpg";
  }
  constructor(private router:Router){}
  handleNavigate(){
    this.router.navigate([""])
  }
}
