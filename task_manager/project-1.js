var tasks;

tasks = [
  {
    text: 'Pay phone bill',
    complete: false,
    priority: 1
  },
  {
    text: 'Write best-selling novel',
    complate: false,
    priority: 3
  },
  {
    text: 'Walk the dog',
    complete: false,
    priority: 2
  }
];

console.log(tasks);

var tasks, addTask;

tasks = []


addTask = function(task) {
  tasks.push({
    text: task,
    complete: false,
    priority: 1
  });
};

addTask('Walk the dog');
addTask('comb my hair');
addTask('Pay the phone bill');
addTask('Write best-selling novel');
addTask('Plan out next year\'s courses.');