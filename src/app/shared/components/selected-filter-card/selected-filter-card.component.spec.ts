import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFilterCardComponent } from './selected-filter-card.component';

describe('SelectedFilterCardComponent', () => {
  let component: SelectedFilterCardComponent;
  let fixture: ComponentFixture<SelectedFilterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedFilterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedFilterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
