import { HeadlinesPage } from './app.po';

describe('headlines App', () => {
  let page: HeadlinesPage;

  beforeEach(() => {
    page = new HeadlinesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
