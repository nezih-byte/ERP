import { TestBed } from '@angular/core/testing';

import { TableClientService } from './table-client.service';

describe('TableClientService', () => {
  let service: TableClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
