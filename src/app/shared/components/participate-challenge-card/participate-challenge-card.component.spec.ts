import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateChallengeCardComponent } from './participate-challenge-card.component';

describe('ParticipateChallengeCardComponent', () => {
  let component: ParticipateChallengeCardComponent;
  let fixture: ComponentFixture<ParticipateChallengeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipateChallengeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipateChallengeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
