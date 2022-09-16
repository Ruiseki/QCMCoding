const   express = require('express'),
        fs = require('fs'),
        bodyParser = require('body-parser');

var data = JSON.parse(fs.readFileSync('./ranking.json'));
var questions = JSON.parse(fs.readFileSync('./questions.json'));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

/* app.use(express.json({
    limit: '50mb'
})); */

app.post('/ranking', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json(data);
});

app.post('/questions', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json(questions);
});

app.post('/upload', (req, res) => {
    console.log(req.body);

    /* let game = req.body;
    
    data.push(game);
    data.sort((a, b) => b.id - a.id);
    fs.writeFileSync('./ranking.json', JSON.stringify(data)); */
});

app.listen(8044, () => {
    console.log('Server has started on port 8044');
});