var entryCount = 0;
// counts how many times button is pressed
var displayCount = 0;
// counts how many spans (letters) are on the screen
$(document).ready(function() {

  //capture key presses - runs once and then again
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters
    //https://unicodelookup.com/
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});

// WORK HERE

function createElement(k) {
  var elem = $('#cursor');
  //put code below here

  if (k == "a") {
    elem.before('<span class="inner">a</span>');
    $('#container').addClass('unrotate');
  }

  if (k == "A") {
    elem.before('<span class="inner A">A*</span>');
    $('.A').addClass('fontarizonia');
    $('body').addClass('backgroundgreen');
    $('#container').addClass('backgroundgreen');
  }

  if (k == "b") { elem.before('<span class="inner b ">b</span>');
    $('.b').addClass('fontlyno');
    $('b').ready(function(){
      var randomID = "image-" + Math.floor((Math.random() * 1000));
      var element = $( "#container" ).append('<img src="assets/star2.png" width="200px" class="overlay" id="' + randomID + '">');
      // set a random value for the x coordinate
      var x = Math.floor(Math.random()*50);
      console.log ('x=' + x);
      //set a random value for the y coordinate
      var y = Math.floor(Math.random() *50);
      console.log ('y=' + y);
      //5. add css to my image using new x/y coordinates
      $('#' + randomID).css('left', x + '%');
      $('#' + randomID).css('top', y + '%');
      });
  }
  if (k == "B") { elem.before('<span class="inner">B</span>'); }

  if (k == "c") { elem.before('<span class="inner c">c</span>');
    $('.c').addClass('fontterminalg');
    $('#container').addClass('rotateneg');
  }
  if (k == "C") { elem.before('<span class="inner C">C</span>');
  $('.C').addClass('fontarizonia');
  }

  if (k == "d") { elem.before('<span class="inner">d</span>');
    $('#container').addClass('rotatepos');
 }
  if (k == "D") { elem.before('<span class="inner D">D</span>');
    $('.D').addClass('fontdisney');
  }

  if (k == "e") { elem.before('<span class="inner">e</span>');}
  if (k == "E") { elem.before('<span class="inner E">E</span>');
    $('.E').addClass('fontdisney');
  }

  if (k == "f") { elem.before('<span class="inner f">f</span>');
    $('.f').addClass('fontferrari');
    $('#container').addClass('rotatepos');
 }
  if (k == "F") { elem.before('<span class="inner F">F</span>');
    $('.F').addClass('fontvtf');
  }

  if (k == "g") { elem.before('<span class="inner g">g</span>');
    $('.g').addClass('fontterminalg');
    $('g').ready(function(){
      var randomID = "image-" + Math.floor((Math.random() * 1000));
      var element = $( "#container" ).append('<img src="assets/smile.png" width="40px" class="overlay" id="' + randomID + '">');
      // set a random value for the x coordinate
      var x = Math.floor(Math.random()*50);
      console.log ('x=' + x);
      //set a random value for the y coordinate
      var y = Math.floor(Math.random() *50);
      console.log ('y=' + y);
      //5. add css to my image using new x/y coordinates
      $('#' + randomID).css('left', x + '%');
      $('#' + randomID).css('top', y + '%');
      });
  }
  if (k == "G") { elem.before('<span class="inner G">G</span>');
    $('.G').addClass('fontlyno');
  }

  if (k == "h") { elem.before('<span class="inner h">h</span>');
    $('body').addClass('backgroundblue');
    $('#container').addClass('backgroundblue');
    $('.h').addClass('fontterminalg');
  }

  if (k == "H") { elem.before('<span class="inner">H</span>');
    $('body').addClass('backgroundblue');
    $('#container').addClass('backgroundblue');
  }

  if (k == "i") { elem.before('<span class="inner">d</span>'); }
  if (k == "I") { elem.before('<span class="inner I">I*</span>');
    $('.I').addClass('fontarizonia');
  }

  if (k == "j") { elem.before('<span class="inner">j</span>');
  $('j').ready(function(){
    var randomID = "image-" + Math.floor((Math.random() * 1000));
    var element = $( "#container" ).append('<img src="assets/doremon.png" width="200px" class="overlay" id="' + randomID + '">');
    // set a random value for the x coordinate
    var x = Math.floor(Math.random()*50);
    console.log ('x=' + x);
    //set a random value for the y coordinate
    var y = Math.floor(Math.random() *50);
    console.log ('y=' + y);
    //5. add css to my image using new x/y coordinates
    $('#' + randomID).css('left', x + '%');
    $('#' + randomID).css('top', y + '%');
    });
  }
  if (k == "J") {elem.before('<span class="inner">J</span>');}

  if (k == "k") { elem.before('<span class="inner k">k</span>');
    $('.k').addClass('fontwalt');
    $('k').ready(function(){
      var randomID = "image-" + Math.floor((Math.random() * 1000));
      var element = $( "#container" ).append('<img src="assets/mickey.png" width="200px" class="overlay" id="' + randomID + '">');
      // set a random value for the x coordinate
      var x = Math.floor(Math.random()*50);
      console.log ('x=' + x);
      //set a random value for the y coordinate
      var y = Math.floor(Math.random() *50);
      console.log ('y=' + y);
      //5. add css to my image using new x/y coordinates
      $('#' + randomID).css('left', x + '%');
      $('#' + randomID).css('top', y + '%');
      });
  }
  if (k == "K") { elem.before('<span class="inner K">K</span>');
    $('.K').addClass('fontvtf');
  }

  if (k == "l") { elem.before('<span class="inner">l</span>');
    $('body').addClass('backgroundpink');
    $('R').ready(function(){
      var randomID = "image-" + Math.floor((Math.random() * 1000));

      //append div
      var element = $( "#container" ).append('<img src="assets/heart.png" width="120px" class="overlay" id="' + randomID + '">');
      // set a random value for the x coordinate
      var x = Math.floor(Math.random()*50);
      console.log ('x=' + x);
      //set a random value for the y coordinate
      var y = Math.floor(Math.random() *50);
      console.log ('y=' + y);
      //5. add css to my image using new x/y coordinates
      $('#' + randomID).css('left', x + '%');
      $('#' + randomID).css('top', y + 'vh');
      });
  }
  if (k == "L") { elem.before('<span class="inner L">L</span>');
  $('.L').addClass('fontnasa');
  }


  if (k == "m") { elem.before('<span class="inner m">m</span>');
    $('.m').addClass('fontmcdonalds');
    $('#container').addClass('unrotate');
  }
  if (k == "M") { elem.before('<span class="inner M">M</span>');
    $('.M').addClass('fontmcdonalds');
  }

  if (k == "n") { elem.before('<span class="inner n">n</span>');
  $('n').ready(function(){
    var randomID = "image-" + Math.floor((Math.random() * 1000));
    var element = $( "#container" ).append('<img src="assets/star1.png" width="200px" class="overlay" id="' + randomID + '">');
    // set a random value for the x coordinate
    var x = Math.floor(Math.random()*50);
    console.log ('x=' + x);
    //set a random value for the y coordinate
    var y = Math.floor(Math.random() *50);
    console.log ('y=' + y);
    //5. add css to my image using new x/y coordinates
    $('#' + randomID).css('left', x + '%');
    $('#' + randomID).css('top', y + '%');
  });
  }
  if (k == "N") { elem.before('<span class="inner N">N</span>');
    $('.N').addClass('fontnasa');
  }

  if (k == "o") { elem.before('<span class="inner o">o</span>');
    $('.o').addClass('fontterminalg');
  }
  if (k == "O") { elem.before('<span class="inner O">O</span>');
    $('.O').addClass('fontlyno');
  }

  if (k == "p") { elem.before('<span class="inner p">p</span>');
    $('.p').addClass('fontlyno');
    $('#container').addClass('rotatepos');
  }
  if (k == "P") { elem.before('<span class="inner P">P</span>');
    $('.P').addClass('fontlyno');
  }

  if (k == "q") { elem.before('<span class="inner q">q</span>');
    $('.q').addClass('fontterminalg')
  }
  if (k == "Q") { elem.before('<span class="inner Q">Q</span>');
    $('.Q').addClass('fontvtf');
  }

  if (k == "r") { elem.before('<span class="inner r">r</span>');
    $('r').ready(function(){
      var randomID = "image-" + Math.floor((Math.random() * 1000));

      //append div
      var element = $( "#container" ).append('<img src="assets/smile.png" width="40px" class="overlay" id="' + randomID + '">');
      // set a random value for the x coordinate
      var x = Math.floor(Math.random()*50);
      console.log ('x=' + x);
      //set a random value for the y coordinate
      var y = Math.floor(Math.random() *50);
      console.log ('y=' + y);
      //5. add css to my image using new x/y coordinates
      $('#' + randomID).css('left', x + '%');
      $('#' + randomID).css('top', y + 'vh');
      $('.r').addClass('fontterminalg');
  });
  }

  if (k == "R") { elem.before('<span class="inner R">R</span>');
    $('.R').addClass('fontmcdonalds');
  }

  if (k == "s") { elem.before('<span class="inner">s</span>');
    $('body').addClass('backgroundblue');
    $('#container').addClass('backgroundblue');
    $('.o').addClass('fontterminalg');
  }
  if (k == "S") { elem.before('<span class="inner S">S</span>');
    $('body').addClass('backgroundorange');
    $('#container').addClass('backgroundorange');
    $('.S').addClass('fontnasa');
  }

  if (k == "t") { elem.before('<span class="inner t">t</span>');
    $('.t').addClass('fontwalt');
  }
  if (k == "T") { elem.before('<span class="inner">T</span>'); }

  if (k == "u") { elem.before('<span class="inner">i</span>');
  }
  if (k == "U") { elem.before('<span class="inner U">U</span>');
    $('.U').addClass('fontlyno');
    $('#container').addClass('unrotate');
  }

  if (k == "v") { elem.before('<span class="inner v">v</span>');
    $('.v').addClass('fontlyno');
   }
  if (k == "V") { elem.before('<span class="inner">V</span>');
    $('.v').addClass('fontlyno');
   }

  if (k == "w") { elem.before('<span class="inner w">w</span>');
    $('body').addClass('backgroundpurple');
    $('#container').addClass('backgroundpurple');
  }
  if (k == "W") { elem.before('<span class="inner W">W</span>');
    $('.W').addClass('fontmcdonalds');
  }

  if (k == "x") { elem.before('<span class="inner x">x</span>');
    $('.x').addClass('fontvtf');
    $('#container').addClass('rotatepos');
  }
  if (k == "X") { elem.before('<span class="inner X">X</span>');
    $('.X').addClass('fontvtf');
  }

  if (k == "y") { elem.before('<span class="inner">y</span>');
    $('body').addClass('backgroundpink');
    $('#container').addClass('backgroundpink');
    $('#container').addClass('rotateneg');
  }
  if (k == "Y") { elem.before('<span class="inner">Y</span>');
    $('body').addClass('backgroundpink');
    $('#container').addClass('backgroundpink');
  }

  if (k == "z") { elem.before('<span class="inner">z</span>'); }
  if (k == "Z") { elem.before('<span class="inner">Z</span>'); }


  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>') };

  if (k == ",") {
    var randomLetter = generateRandomLetter();

    elem.before('<span class="inner generallogo">' + randomLetter + '</span>');

    $('.generallogo').addClass('fontlogo');
  };

  if (k == ".") { var randomLetter = generateRandomLetter();
    elem.before('<span class="inner perlogo">' + randomLetter + '</span>');
    $('.perlogo').addClass('fontflogo');
  }

  if (k == "!") { var randomLetter = generateRandomLetter();
    elem.before('<span class="inner chineseny">' + randomLetter + '</span>');
    $('.chineseny').addClass('fontchineseny');
  }

  if (k == ",") { var randomLetter = generateRandomLetter();
    elem.before('<span class="inner opensourcelogos">' + randomLetter + '</span>');
    $('.opensourcelogos').addClass('fontopen');
  }


  if (k == "'") { elem.before('<span class="inner">&apos;</span>'); }

  //Put stuff above here
  }

  function deleteElement() {
    $(".inner").last().remove();
  }

  function generateRandomLetter() {
    var allLetters = ["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var randomNumber = Math.floor(Math.random() * allLetters.length);
    return allLetters[randomNumber];
  }
