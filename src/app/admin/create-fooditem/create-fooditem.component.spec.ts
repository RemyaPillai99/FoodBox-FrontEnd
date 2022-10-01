import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFooditemComponent } from './create-fooditem.component';

describe('CreateFooditemComponent', () => {
  let component: CreateFooditemComponent;
  let fixture: ComponentFixture<CreateFooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
