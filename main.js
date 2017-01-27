

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory

  var word ;              // Selected word
  var guess ;             // Geuss
  var guesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Think of a WDI12 Student";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Think of a Movie";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Think of a City";
    }
  }

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "You Loose";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }


   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = 6;
  };

    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };

   frame2 = function() {
     draw (10, 0, 10, 600);
   };

   frame3 = function() {
     draw (0, 5, 70, 5);
   };

   frame4 = function() {
     draw (60, 5, 60, 15);
   };

   torso = function() {
     draw (60, 36, 60, 70);
   };

   rightArm = function() {
     draw (60, 46, 100, 50);
   };

   leftArm = function() {
     draw (60, 46, 20, 50);
   };

   rightLeg = function() {
     draw (60, 70, 100, 100);
   };

   leftLeg = function() {
     draw (60, 70, 20, 100);
   };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guesses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function () {
    categories = [
        ["andres-espinosa", "angelo-brown", "billy-keating", "khoi-le", "mike-flores", "rae-owens", "chris-jaffier"],
        ["matrix", "ghost-busters", "gladiator", "finding-nemo", "the-legend"],
        ["columbus", "houston", "new-york-city", "chicago", "los-angeles"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();


   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }

//
// var time = document.getElementById("status");
//
//  var countDown = (10, "status");
//   function countDown(secs, elem) {
//     var element = document.getElementById(elem);
//     time.innerHTML = “You got” + secs + “seconds” ;
//       if (secs < 1) {
//       clearTimeout(timer);
//       showLives.innerHTML = "You Loose";
// }
//        secs—;
//        var timer = setTimeout(“countDown(“+secs+”, “‘+elem+’”)”, 1000);
// }
