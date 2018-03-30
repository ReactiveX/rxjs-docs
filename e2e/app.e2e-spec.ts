import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('rxjs-docs App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getPageTitle()).toEqual('RxJS Docs');
  });

  it('should not display title if the window is mobile', () => {
    browser
      .manage()
      .window()
      .setSize(320, 480);
    page.navigateTo();
    expect(page.getPageTitleReference().isDisplayed()).toBeFalsy();
  });
});
