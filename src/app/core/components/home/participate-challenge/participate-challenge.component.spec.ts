import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateChallengeComponent } from './participate-challenge.component';

describe('ParticipateChallengeComponent', () => {
  let component: ParticipateChallengeComponent;
  let fixture: ComponentFixture<ParticipateChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipateChallengeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipateChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
