import cheerio from 'cheerio-without-node-native';
export default class HtmlParser {

  static getTitle(html){
    let $ = cheerio.load(html);
    let title = $('title').text();
    return title;
  }

  static getDescription(html){
    let $ = cheerio.load(html);
    let description = $('meta[name=description]').attr('content');
    return description;
  }

  static getImageSrc(html){
    let $ = cheerio.load(html);
    let imageSrc = $('img').attr('src');
    return imageSrc;
  }
}
