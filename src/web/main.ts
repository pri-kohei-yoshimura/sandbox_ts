import { createApp, ref } from 'vue';
import { TodoList } from '../todoList';

const todo = new TodoList();

createApp({
  setup() {
    const task = ref('');
    const tasks = ref<string[]>([]);

    const refresh = () => {
      tasks.value = todo.list()
        ? todo.list().split('\n').map(line => line.replace(/^\d+\.\s*/, ''))
        : [];
    };

    const addTask = () => {
      todo.add(task.value);
      task.value = '';
      refresh();
    };

    const removeTask = (index: number) => {
      todo.remove(index);
      refresh();
    };

    refresh();

    return { task, tasks, addTask, removeTask };
  },
  template: `
    <div>
      <h1>TODO List</h1>
      <input v-model="task" placeholder="New task" />
      <button @click="addTask">Add</button>
      <ul>
        <li v-for="(t, index) in tasks" :key="index">
          {{ index + 1 }}. {{ t }}
          <button @click="removeTask(index)">Remove</button>
        </li>
      </ul>
    </div>
  `
}).mount('#app');
