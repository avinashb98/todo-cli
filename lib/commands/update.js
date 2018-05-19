const readline = require('readline'),
      rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');

const updateTask = function (flags) {
    const tasksPath = './lib/tasks.json';
    const taskIndex = flags[1] - 1;

    fs.readFile(tasksPath, (err, data) => {
        if (err) throw err;
        let tasks = JSON.parse(data);
        let taskToBeUpdated = tasks[taskIndex].detail;
        
        rl.question('Update your task \n ', function (answer) {
            tasks[taskIndex].detail = answer;
            console.log('Task is updated');
            
            tasks = JSON.stringify(tasks);
            
            fs.writeFile(tasksPath, tasks, (err) => {
                if (err) throw err;
            });

            rl.close();
        });

        rl.write(taskToBeUpdated);

    })
}

module.exports = updateTask;