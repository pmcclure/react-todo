const express = require('express');

var app = express(app);
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('running on port ' + PORT);
})