import { MflixVisualizerPage } from './app.po';

describe('mflix-visualizer App', function() {
  let page: MflixVisualizerPage;

  beforeEach(() => {
    page = new MflixVisualizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
