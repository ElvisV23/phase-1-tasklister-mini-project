document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

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