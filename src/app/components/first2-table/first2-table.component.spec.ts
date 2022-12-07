import { ComponentFixture, TestBed } from '@angular/core/testing';

import { First2TableComponent } from './first2-table.component';

describe('First2TableComponent', () => {
  let component: First2TableComponent;
  let fixture: ComponentFixture<First2TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ First2TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(First2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
