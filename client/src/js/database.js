import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');
export const putDb = async (content) => {
  console.error('putDb not implemented');

  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const request = tx.objectStore('jate').put({id: 1, content});
  // console.log('🚀 - data saved to the database'), result;
  console.log('🚀 - data saved to the database');
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');
export const getDb = async () => {
  console.error('getDb not implemented');
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const request = tx.objectStore('jate').getAll(1);
  const result = await request;
  return result[0].content;
  // console.log('result.value', result);
  // return result;
};

initdb();
