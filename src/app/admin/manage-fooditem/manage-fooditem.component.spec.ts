import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFooditemComponent } from './manage-fooditem.component';

describe('ManageFooditemComponent', () => {
  let component: ManageFooditemComponent;
  let fixture: ComponentFixture<ManageFooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFooditemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
