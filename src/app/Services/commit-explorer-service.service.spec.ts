import { TestBed } from '@angular/core/testing';

import { CommitExplorerServiceService } from './commit-explorer-service.service';

describe('CommitExplorerServiceService', () => {
  let service: CommitExplorerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitExplorerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
