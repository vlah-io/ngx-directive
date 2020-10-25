import { TestBed } from '@angular/core/testing';

import { NgxDirectiveService } from './ngx-directive.service';

describe('NgxDirectiveService', () => {
  let service: NgxDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
