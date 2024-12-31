import { TestBed } from '@angular/core/testing';

import { HackathonCardsService } from './hackathon-cards-service';

describe('HackathonCardsServiceService', () => {
  let service: HackathonCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackathonCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
