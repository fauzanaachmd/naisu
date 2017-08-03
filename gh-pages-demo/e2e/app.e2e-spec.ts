import { GhPagesDemoPage } from './app.po';

describe('gh-pages-demo App', () => {
  let page: GhPagesDemoPage;

  beforeEach(() => {
    page = new GhPagesDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
