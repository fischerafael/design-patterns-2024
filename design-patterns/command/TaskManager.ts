type Task = {
  id: number;
  text: string;
  completed: boolean;
};

class TaskManager {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
    console.log("Task Added:", task);
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log("Task Removed:", taskId);
  }

  toggleTaskCompletion(taskId: number): void {
    const task = this.tasks.find((task) => task.id === taskId);
    if (task) {
      task.completed = !task.completed;
      console.log("Task Toggled:", task);
    }
  }

  getTasks(): Task[] {
    return [...this.tasks];
  }
}
