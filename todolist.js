function createList() {
  const listContainer = document.getElementById('listContainer');
  const listName = document.getElementById('listName').value;

  if (listName.trim() === "") {
    alert('please input your list name');
    return;
  } /*checks if empty */
  const tempContainer = document.createElement("div");
  tempContainer.className = 'tempContainer'; /*so can append list later */
  tempContainer.innerHTML = `
  <h2>${listName}</h2>
  <ul id="list-${listName}"></ul>
  <input type="text" id='item-${listName}' placeholder="input your items">
  <button onclick="addItem('${listName}')">Add Item</button>
  `;
  listContainer.appendChild(tempContainer); /*to append list */
  document.getElementById('listName').value = ''; /*to reset input */
}

function addItem(listName) {
  const itemName = document.getElementById(`item-${listName}`).value;
  const listUl = document.getElementById(`list-${listName}`);
  const listItem = document.createElement('li');
  listItem.textContent = itemName;
  listUl.appendChild(listItem);

  document.getElementById(`item-${listName}`).value = '';
}


/*persistent storage in browser, idb */
let db;
const openingRequest = window.indexedDB.open('todolist', 1);

openingRequest.addEventListener('success', (e) => {
  db = e.target.result;
  displayData();
  console.log('db opened successfully');
});
db = openingRequest.result();
displayData();
openingRequest.addEventListener('upgradeneeded', (e) => {
  db = e.target.result; /*will need to use e because this assumes new starting point. need to reinitiate 'db' */
  const objectStore = db.createObjectStore('todolisttable', {
    keyPath: 'id',
    autoIncrement: 'true',
  });
});
objectStore.createIndex('title', 'sometitle', { unique: false });
objectStore.createIndex('body', 'some body', { unique: false });
