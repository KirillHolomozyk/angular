import { TestBed } from '@angular/core/testing';

import { SecondPageServiceService } from './second-page.service.service';

describe('SecondPageServiceService', () => {
  let service: SecondPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
