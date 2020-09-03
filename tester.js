const fs = require('fs');
const Queue = require('./queue.js');
const toMethodName = require('./utils.js');

const queue = new Queue();
fs.readFile('actions.txt', 'utf-8', (err, data) => { 
    if (err) {
        throw err
    };

    const actions = data.split('\n');
    actions.forEach(action => {
        callMethod(action);
    })

});

const callMethod = (action) => {
    console.log(action);
    
    const parsedAction = action.split(',');
    const method = toMethodName(parsedAction[0]);
    
    // assuming no methods takes more than 2 params
    if (parsedAction.length === 1) {
        console.log(queue[method]());
    }
    if (parsedAction.length === 2) {
        const param = Number(parsedAction[1]);
        console.log(queue[method](param));
    }
    if (parsedAction.length === 3) {
        const param1 = Number(parsedAction[1]);
        const param2 = Number(parsedAction[2]);
        console.log(queue[method](param1, param2));
    }
    console.log('**********************************');
}
