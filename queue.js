class Queue {

    constructor() {
        this.users = [];
    }

    add(userId) {
        return userId ? this.users.push(userId) : false;
    }

    removeByUser(userId) {
        if (!userId) {
            return false;
        }
        const index = this.users.indexOf(userId);

        if (index === -1) {
            return false;
        }

        return this.users.splice(index, 1).length > 0;
    }

    removeByPosition(position) {
        if (!position || position > this.users.length) {
            return false;
        }

        const index = position - 1;
        if (index < 0) {
            return false;
        }
        
        return this.users.splice(index, 1).length > 0;
    }

    move(fromPosition, toPosition) {
        if (!fromPosition || !toPosition || fromPosition > this.users.length || toPosition > this.users.length) {
            return false;
        }

        const fromIndex = fromPosition - 1;
        const toIndex = toPosition - 1;

        if (fromIndex < 0 || toIndex < 0) {
            return false;
        }

        const movingUser = this.users.splice(fromIndex, 1)[0];
        if (movingUser.length <= 0) {
            return false;
        }

        this.users.splice(toIndex, 0, movingUser);
        const success = this.users.indexOf(movingUser) === toIndex;

        return success; 
    }

    swap(position1, position2) {
        if (!position1 || !position2) {
            return false;
        }

        const index1 = position1 - 1;
        const index2 = position2 - 1;

        if (index1 < 0 || index2 < 0 || position1 > this.users.length || position2 > this.users.length) {
            return false;
        }
        const returnV = [this.users[index1], this.users[index2]] = [this.users[index2], this.users[index1]];
      
        return returnV.length === 2;
    }

    reverse() {
        const prevLastUser = this.users[this.users.length - 1];
        this.users.reverse();
        return this.users[0] === prevLastUser;
    }

    print() {
        this.users.forEach((user, i) => {
            console.log(`${i + 1}: ${user}`);
        })
        return true;
    }
}

module.exports = Queue;