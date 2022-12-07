import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second12TableComponent } from './second12-table.component';

describe('Second12TableComponent', () => {
  let component: Second12TableComponent;
  let fixture: ComponentFixture<Second12TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Second12TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Second12TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
