class TodoList {
  constructor(title) {
    this.title = title;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}

class TodoApp {
  constructor() {
    this.lists = [];
  }

  createList(title) {
    const newList = new TodoList(title);
    this.lists.push(newList);
    return newList;
  }

  getLists() {
    return this.lists;
  }
}

// Example usage:
const app = new TodoApp();
const groceryList = app.createList("Grocery List");
groceryList.addItem("Milk");
groceryList.addItem("Eggs");

const workList = app.createList("Work List");
workList.addItem("Finish report");
workList.addItem("Email client");

console.log(app.getLists());
