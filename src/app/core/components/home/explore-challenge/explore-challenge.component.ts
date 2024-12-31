import { Component, effect, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HackathonCardsService } from '../../../../shared/services/hackathon-card-service/hackathon-cards-service';
import { SelectedFilterCardComponent } from '../../../../shared/components/selected-filter-card/selected-filter-card.component';

@Component({
  selector: 'app-explore-challenge',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCheckboxModule,
    SelectedFilterCardComponent,
  ],
  templateUrl: './explore-challenge.component.html',
  styleUrl: './explore-challenge.component.scss',
})
export class ExploreChallengeComponent {

  constructor(public cardService: HackathonCardsService) {
    effect(()=>{
      this.queryForm.value.query = this.cardService.getQuery();
      this.queryForm.value.status = this.cardService.getStatuses();
      this.queryForm.value.level = this.cardService.getLevels();
    })
  }

  isFilterModalOpen: boolean = false;
  
  private timeOut: number = 0;

  get searchIcon() {
    return '/assets/icons/search.svg';
  }
  get caretIcon() {
    return '/assets/icons/Caret.svg';
  }

  statuses: string[] = ['All', 'Active', 'Past', 'Upcoming'];
  levels: string[] = ['Easy', 'Medium', 'Hard'];
  
  queryForm = new FormGroup({
    query: new FormControl<string>(''),
    status: new FormControl<string[]>([]),
    level: new FormControl<string[]>([]),
  });

  
  
  openFilterModal() {
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }

  onStatusChange(status: string) {
    if (status === 'All') {
      if (this.statuses.length - 1 === this.queryForm.value.status?.length) {
        this.queryForm.value.status = [];
      } else {
        this.queryForm.value.status = this.statuses.slice(1);
      }
      this.cardService.setStatuses(this.queryForm.value.status ?? []);
      return;
    }
    const isCUrrentStatusSelected = this.queryForm.value.status?.some(
      (s) => s === status
    );
    if (isCUrrentStatusSelected) {
      const filteredStatus = this.queryForm.value.status?.filter(
        (s) => s !== status
      );
      this.queryForm.value.status = filteredStatus;
    } else {
      this.queryForm.value.status?.push(status);
    }
    this.cardService.setStatuses(this.queryForm.value.status ?? []);
  }


  isCurrentStatusChecked(status: string) {
    if (status === 'All') {
      return this.statuses.length - 1 === this.queryForm.value.status?.length;
    }
    return this.queryForm.value.status?.some((s) => s === status);
  }

  onLevelChange(level: string) {
    const isCUrrentLevelSelected = this.queryForm.value.level?.some(
      (l) => l === level
    );
    if (isCUrrentLevelSelected) {
      const filteredLevel = this.queryForm.value.level?.filter(
        (l) => l !== level
      );
      this.queryForm.value.level = filteredLevel;
    } else {
      this.queryForm.value.level?.push(level);
    }
    this.cardService.setLevels(this.queryForm.value.level ?? []);
  }

  isCurrentLevelChecked(level: string) {
    return this.queryForm.value.level?.some((l) => l === level);
  }
  

  queryChange() {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.timeOut = window.setTimeout(() => {
      this.cardService.setQuery(this.queryForm.value.query ?? '');
    }, 1000);
  }
}
