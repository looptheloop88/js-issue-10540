const req = indexedDB.open('firebaseLocalStorageDb');
req.onsuccess = () => {
  const store = req.result
    .transaction('firebaseLocalStorage', 'readonly')
    .objectStore('firebaseLocalStorage');
  // Chain requests so the transaction never auto-commits.
  const loop = () => { store.count().onsuccess = loop; };
  loop();
  console.log("Mock suspended transaction running in Tab A...");
};
