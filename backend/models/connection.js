let mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const mongoLink = 'Your MongoDB link'

mongoose.connect(mongoLink,
    options,
    function (err) {
        if (err) {
            console.log(`error, failed to connect to the database because --> ${err}`);
        } else {
            console.log('Connection successful')
        }
    }
);
