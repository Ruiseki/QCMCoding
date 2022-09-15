var index = 0;
var currentGame = {
    "pseudo" : "Guest",
    "score" : 0,
    "maxScore" : 0
};
var cartes = [
    {
        "question": "Quel est le niveau du langage Python ?",
        "answers": [
            "Bas niveau",
            "Facile",
            "Haut niveau",
            "Intermédiaire"
        ],
        "goodAnswerIndex": [
            2
        ]
    },
    {
        "question": "Java est-il un langage ...",
        "answers": [
            "Interprété",
            "Compilé",
            "Plus compliqué que ça encore"
        ],
        "goodAnswerIndex": [
            1
        ]
    },
    {
        "question": "Le HTML est un langage de programmation",
        "answers": [
            "Vrai",
            "Faux"
        ],
        "goodAnswerIndex": [
            1
        ]
    },
    /* {
        "question" : "",
        "answers" : [
            "",
        ],
        "goodAnswerIndex" : [
            0
        ]
    }, */
];

currentGame.maxScore = cartes.length;

function generateCarte()
{
    
    document.querySelector('#mainInfo').innerHTML = `${index + 1}/${cartes.length}`;
    let newCarte = document.querySelector('.carte').cloneNode(true);
    newCarte.querySelector('.question').innerHTML = cartes[index].question;
    newCarte.removeChild(newCarte.querySelector('.answer'));

    cartes[index].answers.forEach(answer => {
        let newAnswer = document.querySelector('.answer').cloneNode(true);
        newAnswer.querySelector('.answerLabel').innerHTML = answer;
        newCarte.appendChild(newAnswer);
    });
    if(index == cartes.length - 1) newCarte.querySelector('#next').innerHTML = "Finish";
    document.querySelector('#content').appendChild(newCarte);
}

function startTest()
{
    generateCarte();
    document.querySelector('#content').style.display = 'flex';
    document.getElementById("start-button").style.display = "none";
    document.getElementById("rickRoll").style.display = "block";

    $("#content").css("display", "flex").hide().fadeIn();
}

function next()
{
    let allAnswers = document.querySelectorAll('.carte')[1].querySelectorAll('.answer');
    let check = [];

    for (let i = 0; i < allAnswers.length; i++)
    {
        if( allAnswers[i].getElementsByTagName('input')[0].checked ) check.push(i);
    }

    let goodAnswer = true;
    
    if(check.length != cartes[index].goodAnswerIndex.length) goodAnswer = false;

    if(goodAnswer)
    {
        for(let i = 0; i < check.length; i++)
        {
            if(check[i] != cartes[index].goodAnswerIndex[i])
            {
                goodAnswer = false;
                break;
            }
        }
    }

    if(goodAnswer) currentGame.score++;

    if(index == cartes.length - )
    {
        // afficher l'ecran de resultat
    }
    else
    {
        index++;
        document.querySelector('#content').removeChild(document.querySelector('#content').lastChild);
        generateCarte(index);
        $('.carte').css("display", "block").hide().fadeIn(500);
    }
}


function prev()
{
    index = index == cartes.length + 1 ? 0 : index - 1;
    document.querySelector('#content').removeChild(document.querySelector('#content').lastChild);
    generateCarte(index);
}

function sendName()
{
    let popUp = document.getElementById('name-pop-up');
    currentGame.pseudo = popUp.getElementsByTagName('input')[0].value;
    if (currentGame.pseudo.length >= 3)
    {
        $("#name-pop-up").fadeOut(1000);
        $("#wrong-nickname").fadeOut(1000);
        $('header').css("display", "flex").hide().fadeIn(1500);
        document.querySelector('#content').style.marginTop = '10px';
    }   
    else
    {
        $("#wrong-nickname").fadeIn(1000);
    }
}

$("#pseudo").click(function () {
    $("#wrong-nickname").fadeOut(1000);
})