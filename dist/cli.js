"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const readline = require('readline');
const todoList_1 = require("./todoList");
const constants_1 = require("./constants");
/**
 * Display the CLI menu.
 */
function printMenu() {
    console.log(`${constants_1.MENU_ADD}. Add task`);
    console.log(`${constants_1.MENU_LIST}. List tasks`);
    console.log(`${constants_1.MENU_REMOVE}. Remove task`);
    console.log(`${constants_1.MENU_EXIT}. Exit`);
    process.stdout.write(constants_1.PROMPT_MESSAGE);
}
/**
 * Entry point for the TODO CLI application.
 */
function main() {
    const todo = new todoList_1.TodoList();
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const prompt = () => printMenu();
    rl.on('line', (input) => {
        switch (input.trim()) {
            case constants_1.MENU_ADD:
                rl.question('Enter task: ', (task) => {
                    todo.add(task);
                    console.log('Task added.');
                    prompt();
                });
                break;
            case constants_1.MENU_LIST:
                const list = todo.list();
                console.log(list || 'No tasks.');
                prompt();
                break;
            case constants_1.MENU_REMOVE:
                rl.question('Enter task number to remove: ', (num) => {
                    const index = parseInt(num) - 1;
                    todo.remove(index);
                    console.log('Task removed if it existed.');
                    prompt();
                });
                break;
            case constants_1.MENU_EXIT:
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
