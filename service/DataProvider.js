export default class DataProvider {

  static getUrlData() {

    const data = {
      urls: [
        {
          url: 'http://www.cnn.com',
          content: 'Here is some cool info about cnn.',
          image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png'
        },
        {
          url: 'http://www.slashdot.com',
          content: 'Here is some cool info about slashdot.',
          image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png'
        },
        {
          url: 'http://www.google.com',
          content: 'Here is some cool info about google.',
          image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png'
        },
        {
          url: 'http://www.yahoo.com',
          content: 'Here is some cool info about YAHOO.',
          image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png'
        }
      ]
    }
    return data;
  }

}
