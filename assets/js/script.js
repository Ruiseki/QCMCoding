var index = 0;
var currentGame = {
    "pseudo" : "Guest",
    "score" : 0
};
var cartes = [
    {
        "question" : "Quelle balise est utilisée pour lier le CSS à l'HTML?",
        "answers" : [
            "meta",
            "script",
            "link",
            "css"
        ],
        "goodAnswerIndex" : [
            2
        ]
    },
    {
        "question" : "Quelle balise est utilisée pour ajouter du Javascript à l'HTML?",
        "answers" : [
            "link",
            "js",
            "meta",
            "script"
        ],
        "goodAnswerIndex" : [
            3
        ]
    },
    {
        "question" : "La méthode POST utilisée pour l'envoi de formulaire renvoie les données dans l'URL",
        "answers" : [
            "Vrai",
            "Faux"
        ],
        "goodAnswerIndex" : [
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
    }/* ,
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
        "question": "(Java) Quel type de variable désigne un nombre entier ?",
        "answers": [
            "int",
            "double",
            "float",
            "String",
            "entier"
        ],
        "goodAnswerIndex": [
            0
        ]
    },
    {
        "question" : "(Java) Quel syntaxe de déclaration est correct ?",
        "answers" : [
            "maVariable = \"hello world\";",
            "string = \'Hello world\';",
            "char maVariable = \"Hello world\";",
            "string maVariable = \"Hello world\";",
            "String maVariable = \"Hello world\";",
            "\"Hello world\" = maVariable(string);",
            "string(maVariable) = \"Hello world\";",
            "String maVariable(\"Hello world\";)"
        ],
        "goodAnswerIndex" : [
            4
        ]
    },
    {
        "question" : "(Java) Qu'est ce que \"String\" ?",
        "answers" : [
            "Un type de variable",
            "Une classe",
            "Une fonction",
            "Une méthode",
            "Une variable",
            "Un type de sous-vêtement",
        ],
        "goodAnswerIndex" : [
            1
        ]
    },
    {
        "question": "(Java) Qu'est ce qu'une méthode statique ?",
        "answers": [
            "Une méthode qui ne bouge pas dans le code",
            "Une méthode qui ne change pas de taille",
            "Une méthode lambda",
            "Une méthode qui ne prend aucun paramètre",
            "Une méthode qui ne demande pas d'objet pour être appelée",
            "Une méthode qui peut être appelée une seule fois"
        ],
        "goodAnswerIndex": [
            4
        ]
    },
    {
        "question": "Quel est le niveau du langage Python ?",
        "answers": [
            "Bas niveau",
            "Facile",
            "Intermédiaire"
            "Haut niveau",
        ],
        "goodAnswerIndex": [
            2
        ]
    },
    {
        "question": "(Python) Quel est la syntaxe de la boucle for correcte?",
        "answers": [
            "for(i = 0; i == 2; i++)",
            "for i in range(2)",
            "for(i:2)",
            "for (i = 0, i == 2, i++)"
        ],
        "goodAnswerIndex": [
            1
        ]
    },
    {
        "question": "(Python) Comment définir une fonction ?",
        "answers": [
            "function test(parameters)",
            "funct test(parameters)",
            "def test(parameters)",
            "function test(var parameters)",
            "funct test(var parameters)",
            "def test(var parameters)"
        ],
        "goodAnswerIndex": [
            2
        ]
    },
    {
        "question" : "En JavaScript, quel est la différence entre var et let ?",
        "answers" : [
            "La portée",
            "La taille maximal de la variable",
            "L'un est pour le client, l'autre pour le serveur",
            "La vitesse de localisation"
        ],
        "goodAnswerIndex" : [
            0
        ]
    },
    {
        "question" : "JavaScript est-il typé ?",
        "answers" : [
            "Oui",
            "Non"
        ],
        "goodAnswerIndex" : [
            0
        ]
    },
    {
        "question" : "(JavaScript) La syntaxe (a, b) => a * (a + b) / b; existe-t-elle et est-elle correct ?",
        "answers" : [
            "Oui",
            "Non"
        ],
        "goodAnswerIndex" : [
            0
        ]
    },
    {
        "question" : "(JavaScript) Quel objet javascript permet d'acceder au DOM ?",
        "answers" : [
            "dom",
            "http",
            "document",
            "page",
            "mainPage"
        ],
        "goodAnswerIndex" : [
            0
        ]
    },
    {
        "question" : "(JavaScript) Quel framework de JavaScript permet de créer un serveur ?",
        "answers" : [
            "AngularJS",
            "React",
            "Vue.js",
            "jQuerry",
            "NodeJS"
        ],
        "goodAnswerIndex" : [
            4
        ]
    },
    {
        "question" : "Question Bonus - A quel langage appartient cette syntaxe : std::thread* task(sorting, &data, dataSize, \"QuickSort\", &sortedData);",
        "answers" : [
            "Java",
            "JavaScript",
            "HTML",
            "CSS",
            "PHP",
            "C",
            "Pascal",
            "Fortran",
            "C++",
            "C#",
            "Brainfuck",
            "Ruby",
            "Whitespace",
        ],
        "goodAnswerIndex" : [
            8
        ]
    }, */
];

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
    if(index == cartes.length - 1){
        newCarte.querySelector('#next').innerHTML = "Finish";
        // newCarte.querySelector('#next').onclick = "result()";
        // newCarte.querySelector('#next').setAttribute("onclick","result()");
    } 
    document.querySelector('#content').appendChild(newCarte);
}

function startTest()
{
    generateCarte();
    document.querySelector('#content').style.display = 'flex';
    document.getElementById("start-button").style.display = "none";
    document.getElementById("rickRoll").style.display = "block";
    
    $("#content").css("display", "flex").hide().fadeIn();
    $('#leaderboard').fadeOut(400);
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

    console.log(currentGame);

    if(index == cartes.length - 1)
    {
        result();
    }
    else
    {
        index++;
        document.querySelector('#content').removeChild(document.querySelector('#content').lastChild);
        generateCarte(index);
        $('.carte').css("display", "block").hide().fadeIn(500);
    }
}

function sendName()
{
    let popUp = document.getElementById('name-pop-up');
    currentGame.pseudo = popUp.getElementsByTagName('input')[0].value;
    if (currentGame.pseudo.length >= 3 && currentGame.pseudo.length <= 16)
    {
        $("#name-pop-up").fadeOut(1000);
        $("#wrong-nickname").fadeOut(1000);
        $("#dots").fadeOut(1000);
        $('#leaderboard').css("display", "flex").hide().fadeIn(1500);
        $('header').css("display", "flex").hide().fadeIn(1500);
        document.querySelector('#content').style.marginTop = '10px';
        document.querySelector('#name').innerHTML = currentGame.pseudo;
    }   
    else
    {
        $("#wrong-nickname").fadeIn(1000);
    }
}

function result() {
    $('#leaderboard').fadeIn(1500);
    $('.carte').fadeOut(1000);
    $('#result').css("display", "flex").hide().fadeIn(400);
    $('#retour-fin').css("display", "flex").hide().fadeIn(400);

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "http://127.0.0.1:8082/addDataRanking", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    /* xhr.onreadystatechange = function ()
    {
        if (xhr.readyState === 4 && xhr.status === 200)
        {
            result.innerHTML = this.responseText;
        }
    }; */

    xhr.send(JSON.stringify(currentGame));

    document.querySelector('#mainInfo').innerHTML = currentGame.score * 100 / cartes.length;

    if(currentGame.score < cartes.length * 0.5){
        document.querySelector("#rating").setAttribute("src", "assets/img/ranking-d.png");
        document.getElementById("results").innerHTML = "Vous n'avez pas le niveau....................";
    }
    else if(currentGame.score < cartes.length * 0.7 ){
        document.querySelector("#rating").setAttribute("src", "assets/img/ranking-c.png");
        document.getElementById("results").innerHTML = "Vous passez de justesse";
    }
    else if(currentGame.score < cartes.length * 0.8 ){
        document.querySelector("#rating").setAttribute("src", "assets/img/ranking-b.png");
        document.getElementById("results").innerHTML = "Vous êtes en bonne voie";
    }
    else if(currentGame.score < cartes.length * 0.9 ){
        document.querySelector("#rating").setAttribute("src", "assets/img/ranking-A.png");
        document.getElementById("results").innerHTML = "Vous êtes bons";
    }
    else if(currentGame.score < cartes.length * 0.95 ){
        document.querySelector("#rating").setAttribute("src", "assets/img/ranking-s.png");
        document.getElementById("results").innerHTML = "Vous êtes très bon";
    }
    else{
        document.querySelector("#rating").setAttribute("src", "assets/img/ranking-X.png");
        document.getElementById("results").innerHTML = "DIVIIIIIIIINNNNNN";
    }
}

for (let index = 0; index < 10; index++) 
{
    let newLine = document.getElementById('rankingLineOrigin').cloneNode(true);
    document.getElementById('tab').appendChild(newLine);
}

function Random()
{
    let rand = Math.random() * (100 - 1) + 1;
    return rand;
}
const circleRand = document.getElementsByClassName('circleRandom');

for (let index = 0; index < circleRand.length; index++)
{
    circleRand[index].style.setProperty('--top', `${Random()}` + "%");
    circleRand[index].style.setProperty('--left', `${Random()}` + "%");
    circleRand[index].style.setProperty('--right', `${Random()}` + "%");
    circleRand[index].style.setProperty('--bottom', `${Random()}` + "%");
    circleRand[index].style.setProperty('--height', `${Random()}` + "px");
    circleRand[index].style.setProperty('--length', `${Random()}` + "px");
}

$("#pseudo").click(function ()
{
    $("#wrong-nickname").fadeOut(1000);
})

function lunatic()
{
    if(document.querySelector("#rating").getAttribute("src") == "assets/img/ranking-X.png")
    {
        currentGame.score = `${currentGame.score}+`;
        document.getElementById("rating").setAttribute("src", "assets/img/ranking-xh.png");
        document.getElementById("results").innerHTML = "PLUUUSS QUEEE DIIIIIIVVIIIIIIIINNNNNNNNN";
    }
}

function retour()
{
    $('#result').fadeOut(1000);
    $('#retour-fin').fadeOut(1000);
    document.getElementById('mainInfo').innerHTML = "Overall Ranking";
}