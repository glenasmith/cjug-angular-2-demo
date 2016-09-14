/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { NewsService } from './news.service';

describe('Service: News', () => {
  beforeEach(() => {
    addProviders([NewsService]);
  });

  it('should ...',
    inject([NewsService],
      (service: NewsService) => {
        expect(service).toBeTruthy();
      }));
});
