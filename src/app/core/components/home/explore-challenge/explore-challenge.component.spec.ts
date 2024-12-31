import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreChallengeComponent } from './explore-challenge.component';

describe('ExploreChallengeComponent', () => {
  let component: ExploreChallengeComponent;
  let fixture: ComponentFixture<ExploreChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
