/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NewsComponent } from './news.component';

describe('Component: News', () => {
  it('should create an instance', () => {
    let component = new NewsComponent(null);
    expect(component).toBeTruthy();
  });
});
