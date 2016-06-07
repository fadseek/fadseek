export class FadseekPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fadseek-app h1')).getText();
  }
}
