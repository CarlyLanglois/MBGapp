import { MbgAppPage } from './app.po';

describe('mbg-app App', function() {
  let page: MbgAppPage;

  beforeEach(() => {
    page = new MbgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
