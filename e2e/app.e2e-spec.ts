import { AngularComponentPagerPage } from './app.po';

describe('angular-component-pager App', () => {
  let page: AngularComponentPagerPage;

  beforeEach(() => {
    page = new AngularComponentPagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
