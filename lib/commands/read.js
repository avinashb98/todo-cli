const fs = require('fs');

const displayTasks = function() {
    const tasksPath = './lib/tasks.json';
    let tasks = fs.readFileSync(tasksPath);
    tasks = JSON.parse(tasks);
    
    const taskCount = tasks.length;
    for(let i = 0; i < taskCount; i++) {
        console.log(`${i+1} \t ${tasks[i].done ? 'done': 'not done'} \t ${tasks[i].detail} `);
    }
}

module.exports = displayTasks;