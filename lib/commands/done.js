const fs = require('fs');

const doneTask = function (flags) {
    const tasksPath = './lib/tasks.json';
    const taskIndex = flags[1];


    fs.readFile(tasksPath, (err, data) => {
        if (err) throw err;
        let tasks = JSON.parse(data);
        tasks[taskIndex].done = true;
        tasks = JSON.stringify(tasks);

        fs.writeFile(tasksPath, tasks, (err) => {
            if (err) throw err;
        });
    })
}

module.exports = doneTask;