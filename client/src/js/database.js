/* `import { openDB } from 'idb';` is importing the `openDB` function from the `idb` library. This
function is used to create and connect to an IndexedDB database. */
import { openDB } from 'idb';

/**
 * This function initializes a database named 'jate' with an object store named 'jate' and
 * auto-incrementing IDs.
 * @returns The `initdb` function is returning a promise that resolves to an IDBDatabase object.
 */
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
export const putDb = async (content) => {

  // Create a connection to the database database and version we want to use.
  const contactDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('jate', 'readwrite');

  // Open up the desired object store.
  const store = tx.objectStore('jate');

  // Use the .add() method on the store and pass in the content.
  const request = store.put({id:1, value: content});

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}
   



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
    // Create a connection to the database database and version we want to use.
    const contactDb = await openDB('jate', 1);

    // Create a new transaction and specify the database and data privileges.
    const tx = contactDb.transaction('jate', 'readonly');
  
    // Open up the desired object store.
    const store = tx.objectStore('jate');
  
    // Use the .getAll() method to get all data in the database.
    const request = store.get(1);
  
    // Get confirmation of the request.
    const result = await request;
    console.log('result.value', result);
    return result?.value;
  }

initdb();
