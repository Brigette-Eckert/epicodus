import { TaproomPage } from './app.po';

describe('06-taproom App', function() {
  let page: TaproomPage;

  beforeEach(() => {
    page = new TaproomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
