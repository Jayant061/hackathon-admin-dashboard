import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonDirective } from '../../../shared/directives/button.directive';
import { MarqueeComponent } from '../../../shared/components/marquee/marquee.component';
import { ParticipateChallengeComponent } from './participate-challenge/participate-challenge.component';
import { ExploreChallengeComponent } from './explore-challenge/explore-challenge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MarqueeComponent,ParticipateChallengeComponent,ExploreChallengeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  @HostBinding("class.highlight") isHighlighted = true;

  constructor(private router: Router){}
  handleNavigate(){
    this.router.navigate(['create-hackathon',ButtonDirective]);
  }
  get homeImage(){
    return "../../../../assets/icons/rocket.svg";
  }
  marqueeData = MarqueeData;

}

const MarqueeData = [
  {
    image:"/assets/icons/AI.svg",
    heading:"100K+",
    description:"AI model submissions"
  },
  {
    image:"/assets/icons/10Person.svg",
    heading:"50K+",
    description:"Data Scientists"
  },
  {
    image:"/assets/icons/hearts.svg",
    heading:"100  +",
    description:"AI Challenges hosted"
  }
]