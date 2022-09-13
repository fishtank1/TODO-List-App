const Task = require("../models/task");

module.exports.delete = function(req, res) {
    // console.log();
    if(Array.isArray(req.body.id)) {
        (req.body.id).map((data) => {
            Task.findByIdAndDelete(data, (err) => {
                if (err){
                    console.log('Error in finding the selected id..', err)
                }
            });
        });
        return res.redirect('back');
    } else {
        Task.findByIdAndDelete(req.body.id, (err) => {
            if (err){
                console.log('Error in finding the selected id..', err)
            } else {
                return res.redirect('back');
            }
        });
    }
}