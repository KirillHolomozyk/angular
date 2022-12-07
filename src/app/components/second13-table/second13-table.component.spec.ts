import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second13TableComponent } from './second13-table.component';

describe('Second13TableComponent', () => {
  let component: Second13TableComponent;
  let fixture: ComponentFixture<Second13TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Second13TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Second13TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
