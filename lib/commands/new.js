const fs = require('fs');

const createTask = function(flags) {
    const tasksPath = './lib/tasks.json';
    const taskDetail = flags[1];
    let task = new Object({
        detail: taskDetail,
        done: false
    });


    fs.readFile(tasksPath, (err, data) => {
        if(err) throw err;
        let tasks = JSON.parse(data);
        tasks.push(task);
        tasks = JSON.stringify(tasks);

        fs.writeFile(tasksPath, tasks, (err) => {
            if(err) throw err;
        });
    })
}

module.exports = createTask;