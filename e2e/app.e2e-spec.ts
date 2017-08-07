import { LearningAngular4Page } from './app.po';

describe('learning-angular4 App', () => {
  let page: LearningAngular4Page;

  beforeEach(() => {
    page = new LearningAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
