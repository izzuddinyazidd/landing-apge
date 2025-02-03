let lists = [];

function createNewList() {
  const titleInput = document.getElementById("newListTitle");
  const title = titleInput.value.trim();

  if (!title) {
    alert("Please enter a list title");
    return;
  }

  const list = {
    id: Date.now(),
    title: title,
    items: [],
  };

  lists.push(list);
  renderLists();
  titleInput.value = "";
}

function addItem(listId) {
  const input = document.querySelector(`.item-input[data-list-id="${listId}"]`);
  const text = input.value.trim();

  if (!text) {
    alert("Please enter a todo item");
    return;
  }

  const list = lists.find((l) => l.id === listId);
  list.items.push(text);
  renderLists();
  input.value = "";
}

function deleteItem(listId, itemIndex) {
  const list = lists.find((l) => l.id === listId);
  list.items.splice(itemIndex, 1);
  renderLists();
}

function renderLists() {
  const container = document.getElementById("listsContainer");
  container.innerHTML = "";

  lists.forEach((list) => {
    const listElement = document.createElement("div");
    listElement.className = "todo-list";
    listElement.innerHTML = `
            <h2>${list.title}</h2>
            <div>
                <input type="text" 
                       class="item-input" 
                       data-list-id="${list.id}" 
                       placeholder="Enter new item">
                <button onclick="addItem(${list.id})">Add Item</button>
            </div>
            <ul class="items-list">
                ${list.items
                  .map(
                    (item, index) => `
                    <li class="item">
                        ${item}
                        <button class="delete-btn" 
                                onclick="deleteItem(${list.id}, ${index})">
                            Delete
                        </button>
                    </li>
                `
                  )
                  .join("")}
            </ul>
        `;
    container.appendChild(listElement);
  });
}
