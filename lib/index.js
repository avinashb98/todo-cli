const todo = require('commander');

todo
    .version('0.0.1')
    .option('-n, --new', 'Add new task')
    .option('-u, --update', 'Update a task')
    .option('-r, --remove', 'Remove a task')
    .option('-c, --check', 'Check a task')
    .parse(process.argv);

const main = function(env, path, ...flags) {
    if (flags.length == 0) {
        require('./commands/read')();
    } else {
        if (todo.new) {
            require('./commands/new')(flags);
        }
        if (todo.update) console.log('  - update');
        if (todo.remove) {
            require('./commands/remove')(flags);
        }
    }
}    

main(...process.argv);