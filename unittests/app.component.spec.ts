/* tslint:disable:no-unused-variable */
import { AppComponent } from '../app/app.component';

import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  async, inject
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';
import { By }                   from '@angular/platform-browser';

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with new', function () {
    it('should instantiate component', () => {
      expect(new AppComponent()).not.toBeNull('Whoopie!');
    });
});

