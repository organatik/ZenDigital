import { ZenDigitalPage } from './app.po';

describe('zen-digital App', () => {
  let page: ZenDigitalPage;

  beforeEach(() => {
    page = new ZenDigitalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
