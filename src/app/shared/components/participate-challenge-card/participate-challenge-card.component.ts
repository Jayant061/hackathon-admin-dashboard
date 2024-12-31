import { Component, input } from '@angular/core';

@Component({
  selector: 'app-participate-challenge-card',
  standalone: true,
  imports: [],
  templateUrl: './participate-challenge-card.component.html',
  styleUrl: './participate-challenge-card.component.scss'
})
export class ParticipateChallengeCardComponent {
 image = input.required<string>();
 heading = input.required<string>();
 description = input.required<string>();
}
