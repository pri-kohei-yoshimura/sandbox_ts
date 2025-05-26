import { TodoList } from '../src/todoList';

describe('TodoList', () => {
  test('adds and lists tasks', () => {
    const todo = new TodoList();
    todo.add('task1');
    todo.add('task2');
    expect(todo.list()).toBe('1. task1\n2. task2');
  });

  test('removes tasks by index', () => {
    const todo = new TodoList();
    todo.add('t1');
    todo.add('t2');
    todo.remove(0);
    expect(todo.list()).toBe('1. t2');
  });

  test('ignores invalid removals', () => {
    const todo = new TodoList();
    todo.add('a');
    todo.remove(5);
    expect(todo.list()).toBe('1. a');
  });
});
