function createList() {
  const listName = document.getElementById("listName").value;
  if (listName.trim() === "") {
    alert("Please enter a list name.");
    return;
  }

  const listContainer = document.getElementById("listsContainer");

  const listDiv = document.createElement("div");
  listDiv.className = "list";
  listDiv.innerHTML = `
  <h2>${listName}</h2>
  <ul id="list-${listName}"></ul>
  <input type="text" id="item-${listName}" placeholder="Add Item">
  <button onclick="addItem('${listName}')">Add Item</button>
  `;

  listContainer.appendChild(listDiv);
  document.getElementById("listName").value = ""; // Clear the input field
}

function addItem(listName) {
  const itemName = document.getElementById(`item-${listName}`).value;
  if (itemName.trim() === "") return;

  const listUl = document.getElementById(`list-${listName}`);
  const listItem = document.createElement("li");
  listItem.textContent = itemName;
  listUl.appendChild(listItem);

  document.getElementById(`item-${listName}`).value = "";
}
