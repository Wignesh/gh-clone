import { TestBed } from '@angular/core/testing';

import { RepoListDataService } from './repo-list-data.service';

describe('RepoListDataService', () => {
  let service: RepoListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
