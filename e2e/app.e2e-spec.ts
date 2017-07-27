import { LibrariumPage } from './app.po';

describe('librarium App', () => {
  let page: LibrariumPage;

  beforeEach(() => {
    page = new LibrariumPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
