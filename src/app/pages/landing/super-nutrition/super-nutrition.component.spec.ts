import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperNutritionComponent } from './super-nutrition.component';

describe('SuperNutritionComponent', () => {
  let component: SuperNutritionComponent;
  let fixture: ComponentFixture<SuperNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperNutritionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
