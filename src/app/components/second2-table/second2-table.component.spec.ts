import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second2TableComponent } from './second2-table.component';

describe('Second2TableComponent', () => {
  let component: Second2TableComponent;
  let fixture: ComponentFixture<Second2TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Second2TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Second2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
