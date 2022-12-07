import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Third13TableComponent } from './third13-table.component';

describe('Third13TableComponent', () => {
  let component: Third13TableComponent;
  let fixture: ComponentFixture<Third13TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Third13TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Third13TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
