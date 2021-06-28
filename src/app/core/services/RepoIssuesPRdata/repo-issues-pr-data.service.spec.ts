import { TestBed } from '@angular/core/testing';

import { RepoIssuesPrDataService } from './repo-issues-pr-data.service';

describe('RepoIssuesPrDataService', () => {
  let service: RepoIssuesPrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoIssuesPrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
