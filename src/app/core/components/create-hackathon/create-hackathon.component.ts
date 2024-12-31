import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hackathon',
  standalone: true,
  imports: [],
  templateUrl: './create-hackathon.component.html',
  styleUrl: './create-hackathon.component.scss'
})
export class CreateHackathonComponent {
  private router = inject(Router);
  
  handleNavigate(){
    this.router.navigate([''])
  }

}
