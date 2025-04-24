document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");
  const bookList = document.getElementById("book-list"); // Make sure this exists in your HTML

  const bookStore = {
    name: "The Cozy Nook Bookstore",
    books: [
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        imageUrl: "https://example.com/hobbit.jpg"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        imageUrl: "https://example.com/mockingbird.jpg"
      }
    ]
  };

  const bookStoreTitle = document.getElementById("header");
  bookStoreTitle.textContent = bookStore.name;

  // Render books
  bookStore.books.forEach((book) => {
    const bookContainer = document.createElement("li");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookImage = document.createElement("img");

    bookTitle.textContent = book.title;
    bookAuthor.textContent = `by ${book.author}`;
    bookImage.src = book.imageUrl;
    bookImage.alt = book.title;

    bookContainer.append(bookTitle, bookAuthor, bookImage);
    bookList.appendChild(bookContainer);
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = taskInput.value.trim();

    if (newTask) {
      const taskItem = buildTaskItem(newTask);
      taskList.appendChild(taskItem);

      taskInput.value = "";
    }
  });

  function buildTaskItem(taskDescription) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => taskItem.remove());

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔️";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener("click", () => {
      taskItem.style.textDecoration = taskItem.style.textDecoration === "line-through" 
        ? "none" 
        : "line-through";
    });

    taskItem.append(completeBtn, deleteBtn);

    return taskItem;
  }
});
