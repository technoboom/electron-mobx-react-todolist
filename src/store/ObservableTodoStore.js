import shortid from 'shortid';
import * as mobx from 'mobx';

/**
 * ObservableTodoStore - provides core methods to interact with
 * tasks (such as creating, editing, removing, etc.)
 *
 * Example:
 *      observableTodoStore.addTodo("Buy a bottle of milk in Wallmart after work")
 */
class ObservableTodoStore {
    @mobx.observable todos = [];
    @mobx.observable pendingRequests = 0;
    
    constructor() {
        // shows report about current tasks in console after this.todos changing
        // automatically
        mobx.autorun(() => console.log(this.report));
    }

    /**
     * Returns count of all completed tasks
     * @returns {Number}
     */
    @mobx.computed get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    /**
     * Returns common report about current tasks
     * If there are some tasks - shows statistics and next task.
     * Otherwise, shows a message with instructions "How to Start".
     * @returns {string}
     */
    @mobx.computed get report() {
        if (this.todos.length === 0)
            return "No tasks yet. You can create a new task using the button above.";

        return `Next todo: "${this.todos[0].text}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }

    /**
     * Adds a new task to the list
     * @param text  Message of the task
     */
    addTodo(text) {
        this.todos.push({
            id: shortid.generate(),
            text: text,
            completed: false,
            assignee: null
        })
    }
}

export default ObservableTodoStore;