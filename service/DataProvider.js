export default class DataProvider {

  static getUrlData(val) {
    let count = 1000;

    let data = {
      urls: [
      ]
    };

    for (let  i=1; i <= count; i++){
      let item = {
        url: 'http://www.cnn.com ' +i ,
        content: 'Here is some cool info about cnn.',
        image: 'https://www.clker.com/cliparts/1/c/7/7/13986776161270179884cute_cat102.png',
        key: i
      }
      data.urls.push(item);
    }
    console.log(data);
    return data;
  }

}
