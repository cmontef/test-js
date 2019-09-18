var fn = function (cb) {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            cb(null, "Success!");
        } else {
            cb("Fail!");
        }
    }, 1000);
};

var callback = function (failMessage, successMessage) {
    if(failMessage) {
        console.log("No! " + failMessage);
    } else {
        console.log("Yes! " + successMessage);
    }
}

fn(callback);