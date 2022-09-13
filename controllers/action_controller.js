const Task = require("../models/task");

module.exports.action = function(req, res) {
    console.log(req.body);
    Task.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate
    }, function(err, newTask) {
        if(err) {
            console.log('Error in creating new task..', err);
            return;
        }
        return res.redirect('back');
    });
}