// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

const tasksArr = [];

const newTask = function(title, desc) {
  const task = {
    title: title,
    description: desc,
    complete: false,
    markComplete: function() {
      this.complete = true;
    },
    getCompleteStatusString: function() {
      return ((this.complete) ? 'been completed' : 'not been completed');
    },
    showStatus: function() {
      console.log(`${this.title} has ${this.getCompleteStatusString()}`);
    }
  };
  return task;
};

// DRIVER CODE BELOW

tasksArr.push(newTask("Clean Cat Litter", "Take all the 💩 of the litter box")); // task 0
tasksArr.push(newTask("Do Laundry", "😨")); // task 1

tasksArr[0].showStatus(); // Clean Cat Litter has not been completed
tasksArr[0].markComplete();
tasksArr[0].showStatus(); // Clean Cat Litter has been completed
