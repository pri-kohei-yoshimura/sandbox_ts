/**
 * Manages a simple in-memory list of TODO tasks.
 */
export class TodoList {
  private tasks: string[] = [];

  /**
   * Add a new task to the list.
   * @param task text of the task
   */
  add(task: string): void {
    if (task.trim()) {
      this.tasks.push(task.trim());
    }
  }

  /**
   * List all current tasks as a newline separated string.
   */
  list(): string {
    return this.tasks
      .map((task, index) => `${index + 1}. ${task}`)
      .join('\n');
  }

  /**
   * Remove a task by zero-based index.
   * @param index index of task to remove
   */
  remove(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}
