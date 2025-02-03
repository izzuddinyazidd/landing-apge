function createList() {
  const listContainer = document.getElementById('listContainer');
  const listName = document.getElementById('listName').value;

  if (listName.trim() === '') {
    alert('please input your list name');
    return;
  }

  listContainer.innerHTML = '';
  listContainer.innerHTML = `
  <h2>${listName}</h2>
  <div></div>
  <input type="text" id='itemName' placeholder="input your items">
  <button onclick="addItem()">Add Item</button>
  `;

}

function addItem() {
  const itemName = document.getElementById('itemName');

}