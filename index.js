function countWords(){
  var text = document.getElementById("textField").value;

  var numWords = 0;

  for(var i = 0; i<text.length; i++){
    var currentCharacter = text[i];

    if(currentCharacter == " "){
      numWords += 1;
    }
  }
  numWords +=1;

  document.getElementById("t1").innerHTML = numWords;
  document.getElementById("t5").innerHTML = numWords - 1;
}

function countSentences(){
  var text = document.getElementById("textField").value;

  var numWords = 0;

  for(var i = 0; i<text.length; i++){
    var currentCharacter = text[i];

    if(currentCharacter == "."){
      numWords += 1;
    }
  }

  document.getElementById("t2").innerHTML = numWords;

  var numUpper = (text.match(/[A-Z]/g) || []).length;
  var numLower = (text.match(/[a-z]/g) || []).length;


  document.getElementById("t3").innerHTML = numLower;
  document.getElementById("t4").innerHTML = numUpper;
}

function countDigits(){
  var text = document.getElementById("textField").value;

  var numWords = 0;

  for(var i = 0; i<text.length; i++){
    var currentCharacter = text[i];

    if(currentCharacter >= "0" && currentCharacter <= "9"){
      numWords += 1;
    }
  }
  document.getElementById("t6").innerHTML = numWords;
}
