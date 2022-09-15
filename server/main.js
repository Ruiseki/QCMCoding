const   express = require('express'),
        fs = require('fs');

var data = JSON.parse(fs.readFileSync('./ranking.json'));

const app = express();

app.use(express.json());

app.post('/getRanking', (req, res) => {
    res.status(200).json(data);
});

app.post('/addDataRanking', (req, res) => {
    console.log('Getting data');
    data.push(req.body);
    data.sort((a, b) => a.score - b.score)
    res.status(200);
});

app.listen(8082, () => {
    console.log('Server has started on port 8082');
});