import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First13TableComponent } from './first1.3-table.component';

describe('First13TableComponent', () => {
  let component: First13TableComponent;
  let fixture: ComponentFixture<First13TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First13TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First13TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
