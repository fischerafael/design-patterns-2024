class AddTaskCommand implements Command {
  constructor(private manager: TaskManager, private task: Task) {}

  execute(): void {
    this.manager.addTask(this.task);
  }
}
