/**
 * Run this to seed the realm datbase with fixed set of data
 * while we are developing
 **/
import Realm from 'realm';
export default class Seeder {

  static initDb() {
    const UrlSchema = {
      name: 'Url',
      properties: {
        url: 'string',
        description: 'string',
        image: 'string'
      }
    };

    let realm = new Realm({schema: [UrlSchema]});
    realm.write(() => {
      let urls = realm.objects('Url');
      if (urls){
        realm.delete(urls);
      }
      realm.create('Url', {url: 'http://www.google.com', description: 'Straight from realm yo', image: 'http://http://cdn.androidorigin.com/wp-content/uploads/2015/09/Android-Lockscreen-Security-Exploit-Hack.png'})
      realm.create('Url', {url: 'http://www.cnn.com', description: 'CNN Straight from realm yo', image: 'http://http://cdn.androidorigin.com/wp-content/uploads/2015/09/Android-Lockscreen-Security-Exploit-Hack.png'})
      realm.create('Url', {url: 'http://www.yahoo.com', description: 'yahoo Straight from realm yo', image: 'http://http://cdn.androidorigin.com/wp-content/uploads/2015/09/Android-Lockscreen-Security-Exploit-Hack.png'})
      realm.create('Url', {url: 'http://www.slashdot.com', description: 'slashdot Straight from realm yo', image: 'http://http://cdn.androidorigin.com/wp-content/uploads/2015/09/Android-Lockscreen-Security-Exploit-Hack.png'})
      realm.create('Url', {url: 'http://www.napster.com', description: 'Napster Straight from realm yo', image: 'http://http://cdn.androidorigin.com/wp-content/uploads/2015/09/Android-Lockscreen-Security-Exploit-Hack.png'})
    });
  }

  static getData() {
    let realm = new Realm();
    return realm.objects('Url');
  }
}
