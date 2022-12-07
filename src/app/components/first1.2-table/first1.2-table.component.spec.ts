import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First12TableComponent } from './first1.2-table.component';

describe('First12TableComponent', () => {
  let component: First12TableComponent;
  let fixture: ComponentFixture<First12TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First12TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First12TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
