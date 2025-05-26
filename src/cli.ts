import readline from 'readline';
import { TodoList } from './todoList';
import {
  MENU_ADD,
  MENU_LIST,
  MENU_REMOVE,
  MENU_EXIT,
  PROMPT_MESSAGE,
} from './constants';

/**
 * Display the CLI menu.
 */
function printMenu(): void {
  console.log(`${MENU_ADD}. Add task`);
  console.log(`${MENU_LIST}. List tasks`);
  console.log(`${MENU_REMOVE}. Remove task`);
  console.log(`${MENU_EXIT}. Exit`);
  process.stdout.write(PROMPT_MESSAGE);
}

/**
 * Entry point for the TODO CLI application.
 */
export function main(): void {
  const todo = new TodoList();
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const prompt = (): void => printMenu();

  rl.on('line', (input: string) => {
    switch (input.trim()) {
      case MENU_ADD:
        rl.question('Enter task: ', (task: string) => {
          todo.add(task);
          console.log('Task added.');
          prompt();
        });
        break;
      case MENU_LIST:
        const list = todo.list();
        console.log(list || 'No tasks.');
        prompt();
        break;
      case MENU_REMOVE:
        rl.question('Enter task number to remove: ', (num: string) => {
          const index = parseInt(num) - 1;
          todo.remove(index);
          console.log('Task removed if it existed.');
          prompt();
        });
        break;
      case MENU_EXIT:
        rl.close();
        break;
      default:
        console.log('Invalid option');
        prompt();
        break;
    }
  });

  rl.on('close', () => {
    console.log('Goodbye!');
    process.exit(0);
  });

  prompt();
}

if (require.main === module) {
  main();
}
