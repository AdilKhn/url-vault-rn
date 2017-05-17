import HtmlParser from './HtmlParser.js';
test('Gets the title from html', () => {
  let html = '<html><head><title>Sample Title</title></head></html>';
  expect(HtmlParser.getTitle(html)).toBe('Sample Title');
});

test('Gets the description meta tag value', () => {
  let html = '<html><head><meta name="description" content="This is the sample description in the meta"></head></html>';
  expect(HtmlParser.getDescription(html)).toBe('This is the sample description in the meta');
});

test('Gets the first image in the page', () => {
  let html = '<html><head></head><body><div><img src="./assets/doggy.jpg"><p><img src="./assets/foo.jpg"></p></body></html>';

  expect(HtmlParser.getImageSrc(html)).toBe('./assets/doggy.jpg');
});

