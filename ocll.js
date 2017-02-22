algorithms = [
    {
        name: 'T, Shark, Hammerhead',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_24',
//        imgUrl: 'https://www.speedsolving.com/wiki/images/5/56/O24.gif',
        imgUrl: 'images/t.gif',
        alg: "r U R' U' r' F R F'"
    },
    {
        name: 'L, Bowtie',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_25',
//        imgUrl: 'https://www.speedsolving.com/wiki/images/5/51/O25.gif',
        imgUrl: 'images/bowtie.gif',
        alg: "R U2 R' U' (Sexy)2 R U' R'"
    },
    {
        name: 'Headlights, U',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_23',
//        imgUrl: 'https://www.speedsolving.com/wiki/images/5/50/O23.gif',
        imgUrl: 'images/headlights.gif',
        alg: "(Sexy)3 (R' F R F')3"
    },
    {
        name: 'Sune, S',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_27',
//        imgUrl: 'https://www.speedsolving.com/wiki/images/3/3e/O27.gif',
        imgUrl: 'images/sune.gif',
        alg: "R U R' U R U2 R'"
    },
    {
        name: 'Anti-Sune, -S',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_26',
//        imgUrl: 'https://www.speedsolving.com/wiki/images/f/fe/O26.gif',
        imgUrl: 'images/anti-sune.gif',
        alg: "L' U' L U' L' U2 L"
    },
    {
        name: 'H',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_21',
//        imgUrl: 'https://www.speedsolving.com/wiki/images/c/c4/O21.gif',
        imgUrl: 'images/h.gif',
        alg: "y F (Sexy)3 F'"
    },
    {
        name: 'Pi, Bruno',
        wiki: 'https://www.speedsolving.com/wiki/index.php/OLL#OLL_22',
//        imgUrl: 'https://www.speedsolving.com/wiki/images/a/a6/O22.gif',
        imgUrl: 'images/pi.gif',
        alg: "f (Sexy) f' F (Sexy) F'"
    },
];

algIndex = -1;

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
//    nameTxt = document.createTextNode(a.name);
//    document.getElementById('namediv').innerText = nameTxt.textContent;
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