algorithms = [
    {
        name: 'T, Shark, Hammerhead',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_24',
        imgUrl: 'images/t.gif',
        alg: "r U R' U' r' F R F'"
    },
    {
        name: 'L, Bowtie',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_25',
        imgUrl: 'images/bowtie.gif',
        alg: "R U2 R' U' (Sexy)2 R U' R'"
    },
    {
        name: 'Headlights, U',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_23',
        imgUrl: 'images/headlights.gif',
        alg: "(Sexy)3 (Sled)3"
    },
    {
        name: 'Sune, S',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_27',
        imgUrl: 'images/sune.gif',
        alg: "R U R' U R U2 R'"
    },
    {
        name: 'Anti-Sune, -S',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_26',
        imgUrl: 'images/anti-sune.gif',
        alg: "L' U' L U' L' U2 L"
    },
    {
        name: 'H, Double Sune, Cross',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_21',
        imgUrl: 'images/h.gif',
        alg: "y F (Sexy)3 F'"
    },
    {
        name: 'Pi, Bruno',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_22',
        imgUrl: 'images/pi.gif',
        alg: "f (Sexy) f' F (Sexy) F'"
    },
];

algIndex = -1;

//fill out the table containing all algorithms
$(document).ready(function() {
    //get the algorithm table ready
    readyTable();
    $('#showallbutton').click(function() {
        $('#allalgstable').toggle();
    });

    //display an initial algorithm
    showNewState();
});

//fills out all the rows in the algorithms table and hides it.
function readyTable() {
    $('#allalgstable').toggle();
    var algCount = algorithms.length;
    for(var i = 0 ; i < algCount ; i++) {
        var alg = algorithms[i];
        var img = '<img src="{0}"/>'.format(alg.imgUrl);
        var text = '<b><a href="{0}">{1}</a></b><br /><span>{2}</span>'.format(alg.wiki, alg.name, alg.alg);
        var row = '<tr><td>{0}</td><td>{1}</td></tr>'.format(img, text);
        $('#allalgstable').append(row);
    }
}

//show a different algorithm
function showNewState() {
    var index = algIndex;
    while(algIndex == index) {
        algIndex = getRand(algorithms.length);
    }
    var a = algorithms[algIndex];

    //set image
    document.getElementById('ollimg').src = a.imgUrl;

    //set name
    if(document.getElementById('shownamecheckbox').checked) {
        showName();       
    } else {
        $('#namediv').hide();
        $('#namebutton').show();
    }
    nl = '<a href="' + a.wiki + '">' + a.name + '</a>';
    document.getElementById('namediv').innerHTML = nl;

    //set algorithm
    if(document.getElementById('showalgcheckbox').checked) {
        showAlg();
    } else {
        $('#algdiv').hide();
        $('#algbutton').show();
    }
    algTxt = document.createTextNode(a.alg);
    document.getElementById('algdiv').innerText = algTxt.textContent;
}

function showName() {
    $('#namediv').show();
    $('#namebutton').hide();
}

function showAlg() {
    $('#algdiv').show();
    $('#algbutton').hide();
}

//gets a number between 0 and max (not including max)
function getRand(max) {
    var x = Math.floor(Math.random() * max);
    return x;
}

//should provide a string.format function similar to C#
String.prototype.format = function() {
    var s = this;
    var i = arguments.length;

    while (i--)
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);

    return s;

};