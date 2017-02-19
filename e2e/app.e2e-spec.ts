import { AirlinePage } from './app.po';

describe('airline App', () => {
  let page: AirlinePage;

  beforeEach(() => {
    page = new AirlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
