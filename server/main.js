const   express = require('express'),
        fs = require('fs');

var data = JSON.parse(fs.readFileSync('./ranking.json'));

const app = express();

/* app.use(express.json({
    limit: '50mb'
})); */

app.post('/ranking', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.json(data);
});

app.listen(8044, () => {
    console.log('Server has started on port 8044');
});