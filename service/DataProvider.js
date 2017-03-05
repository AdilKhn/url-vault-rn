export default class DataProvider {

  static getUrlData(val) {
    let count = 100;
    let item = {
      url: 'http://www.cnn.com',
      content: 'Here is some cool info about cnn.',
      image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png',
    };

    let data = {
      urls: [
      ]
    };
    
    for (let  i=1; i <= count; i++){
      data.urls.push(item);
    }
     return data;
  }

}
