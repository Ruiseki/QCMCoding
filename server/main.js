const   express = require('express'),
        cors = require('cors'),
        fs = require('fs'),
        bodyParser = require('body-parser');

// var data = JSON.parse(fs.readFileSync('./ranking.json'));
var data = require('./ranking.json');
var questions = require('./questions.json');
var corsOptions = {
    origin : 'http://127.0.0.1',
    optionsSuccessStatus : 200,
    methods : 'POST'
}

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(express.json());

app.post('/ranking', (req, res) => {
    res.status(200).json(data);
});

app.post('/questions', (req, res) => {
    res.status(200).json(questions);
});

app.post('/upload', (req, res) => {

    let game = req.body;
    if(typeof(game.score) == 'string') game.score = '100+%';
    else game.score = `${game.score * 100 / questions.length}%`;

    data.push(game);
    data.sort((a, b) => b.id - a.id);
    fs.writeFileSync('./ranking.json', JSON.stringify(data));

    res.status(200);
});

app.listen(8044, () => {
    console.log('Server has started on port 8044');
});