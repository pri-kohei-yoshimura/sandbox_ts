"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
/**
 * Manages a simple in-memory list of TODO tasks.
 */
class TodoList {
    constructor() {
        this.tasks = [];
    }
    /**
     * Add a new task to the list.
     * @param task text of the task
     */
    add(task) {
        if (task.trim()) {
            this.tasks.push(task.trim());
        }
    }
    /**
     * List all current tasks as a newline separated string.
     */
    list() {
        return this.tasks
            .map((task, index) => `${index + 1}. ${task}`)
            .join('\n');
    }
    /**
     * Remove a task by zero-based index.
     * @param index index of task to remove
     */
    remove(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }
}
exports.TodoList = TodoList;
