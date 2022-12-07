import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Third12TableComponent } from './third12-table.component';

describe('Third12TableComponent', () => {
  let component: Third12TableComponent;
  let fixture: ComponentFixture<Third12TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Third12TableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Third12TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
