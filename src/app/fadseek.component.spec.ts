import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FadseekAppComponent } from '../app/fadseek.component';

beforeEachProviders(() => [FadseekAppComponent]);

describe('App: Fadseek', () => {
  it('should create the app',
      inject([FadseekAppComponent], (app: FadseekAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fadseek works!\'',
      inject([FadseekAppComponent], (app: FadseekAppComponent) => {
    expect(app.title).toEqual('fadseek works!');
  }));
});
