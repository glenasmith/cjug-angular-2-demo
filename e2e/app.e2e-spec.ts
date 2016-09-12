import { ChampionPage } from './app.po';

describe('champion App', function() {
  let page: ChampionPage;

  beforeEach(() => {
    page = new ChampionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
