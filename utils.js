const toMethodName = (action) => {
    let methodName; 
    const splittedAction = action.toLowerCase().split('_');

   if (splittedAction.length === 1) {
       methodName = splittedAction[0];
    } else if (splittedAction.length === 2) {
        methodName = splittedAction[0] + 'By' + capitalize(splittedAction[1]);
    } else {
        throw new Error('Method cannot exist');
    }

    return methodName;
}

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

module.exports = toMethodName;