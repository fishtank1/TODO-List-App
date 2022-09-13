const Task = require("../models/task");

module.exports.delete = function(req, res) {
    Task.findByIdAndDelete(req.body.id, (err) => {
        if (err){
            console.log('Error in finding the selected id..', err)
        }
        else{
            return res.redirect('back');
        }
    });
}