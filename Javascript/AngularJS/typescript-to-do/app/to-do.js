var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
})();
var tasks = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Do laundry', 'Low'));
tasks.push(new Task('Walk the cat', 'High'));
tasks[0].markDone();
for (var _i = 0; _i < tasks.length; _i++) {
    var task = tasks[_i];
    console.log(task);
}
