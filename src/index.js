const express = require('express');
const app = express();
const path = require('path');

app.use(require('./routes'));

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

app.listen(app.get('port'), () => {
    console.log(`[youtube-video] launched in ${ app.get('port') }`);
})