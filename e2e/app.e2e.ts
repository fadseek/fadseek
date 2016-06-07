import { FadseekPage } from './app.po';

describe('fadseek App', function() {
  let page: FadseekPage;

  beforeEach(() => {
    page = new FadseekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fadseek works!');
  });
});
