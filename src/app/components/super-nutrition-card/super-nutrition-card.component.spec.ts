import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperNutritionCardComponent } from './super-nutrition-card.component';

describe('SuperNutritionCardComponent', () => {
  let component: SuperNutritionCardComponent;
  let fixture: ComponentFixture<SuperNutritionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperNutritionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperNutritionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
