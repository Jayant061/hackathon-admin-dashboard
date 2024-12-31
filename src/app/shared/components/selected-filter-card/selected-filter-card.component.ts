import { Component, input } from '@angular/core';
import { HackathonCardsService } from '../../services/hackathon-card-service/hackathon-cards-service';

@Component({
  selector: 'app-selected-filter-card',
  standalone: true,
  imports: [],
  templateUrl: './selected-filter-card.component.html',
  styleUrl: './selected-filter-card.component.scss'
})
export class SelectedFilterCardComponent {
  constructor(private cardService:HackathonCardsService){}
  filter = input.required<string>();
  removeFilter(){
    this.cardService.removeFilter(this.filter());
  }
  get crossIcon(){
    return "/assets/icons/crossCircle.svg";
  }
}
