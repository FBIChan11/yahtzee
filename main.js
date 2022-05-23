var rolls = 4;
var dice = [];

var onesGlobal = null;
var twosGlobal = null;
var threesGlobal = null;
var foursGlobal = null;
var fiveGlobal = null;
var sixGlobal = null;

var holdOneV = false;
var holdTwoV = false;
var holdThreeV = false;
var holdFourV = false;
var holdFiveV = false;

var dieOne;
var dieTwo;
var dieThree;
var dieFour;
var dieFive;

function roll() {

  dice = [];
  rolls -= 1;

  if (rolls > 0) {

  } else {
    alert("You\'ve run out of rolls");
    
    
    reset();
  }

  dieImage();

  function dieImage() {

    document.getElementById("btn").innerHTML = "Rolling...";

    setTimeout(function() {

      document.getElementById("btn").innerHTML = "Click Me To Roll The Dice!"
    }, 250);
  }



  if (holdOneV == false) {
   dieOne = Math.floor(Math.random() * 6) + 1;
  } else {
    
  }
 
 if (holdTwoV == false) {
  dieTwo = Math.floor(Math.random() * 6) + 1;
 } else {

 }

if (holdThreeV == false) {
 dieThree = Math.floor(Math.random() * 6) + 1;
} else {

}

if (holdFourV == false) {
dieFour = Math.floor(Math.random() * 6) + 1;
} else {

}

if (holdFiveV == false) {
dieFive = Math.floor(Math.random() * 6) + 1;
} else {

}
  
dice.push(dieOne);
dice.push(dieTwo);
dice.push(dieThree);
dice.push(dieFour);
dice.push(dieFive);


  if (dieOne == 1) {
    document.getElementById("die").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png/v1/fill/w_106,h_105,al_c,q_85,enc_auto/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png\">";
  } else if (dieOne == 2) {
    document.getElementById("die").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png/v1/fill/w_102,h_103,al_c,q_85,enc_auto/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png\">";
  } else if (dieOne == 3) {
    document.getElementById("die").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png/v1/fill/w_109,h_108,al_c,q_85,enc_auto/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png\">";
  } else if (dieOne == 4) {
    document.getElementById("die").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png/v1/fill/w_107,h_103,al_c,q_85,enc_auto/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png\">";
  } else if (dieOne == 5) {
    document.getElementById("die").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png/v1/fill/w_103,h_105,al_c,q_85,enc_auto/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png\">";
  } else if (dieOne == 6) {
    document.getElementById("die").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png/v1/fill/w_109,h_115,al_c,q_85,enc_auto/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png\">";
  }

  
  
  if (dieTwo == 1) {
    document.getElementById("die2").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png/v1/fill/w_106,h_105,al_c,q_85,enc_auto/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png\">";
  } else if (dieTwo == 2) {
    document.getElementById("die2").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png/v1/fill/w_102,h_103,al_c,q_85,enc_auto/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png\">";
  } else if (dieTwo == 3) {
    document.getElementById("die2").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png/v1/fill/w_109,h_108,al_c,q_85,enc_auto/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png\">";
  } else if (dieTwo == 4) {
    document.getElementById("die2").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png/v1/fill/w_107,h_103,al_c,q_85,enc_auto/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png\">";
  } else if (dieTwo == 5) {
    document.getElementById("die2").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png/v1/fill/w_103,h_105,al_c,q_85,enc_auto/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png\">";
  } else if (dieTwo == 6) {
    document.getElementById("die2").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png/v1/fill/w_109,h_115,al_c,q_85,enc_auto/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png\">";
  }


  if (dieThree == 1) {
    document.getElementById("die3").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png/v1/fill/w_106,h_105,al_c,q_85,enc_auto/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png\">";
  } else if (dieThree == 2) {
    document.getElementById("die3").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png/v1/fill/w_102,h_103,al_c,q_85,enc_auto/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png\">";
  } else if (dieThree == 3) {
    document.getElementById("die3").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png/v1/fill/w_109,h_108,al_c,q_85,enc_auto/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png\">";
  } else if (dieThree == 4) {
    document.getElementById("die3").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png/v1/fill/w_107,h_103,al_c,q_85,enc_auto/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png\">";
  } else if (dieThree == 5) {
    document.getElementById("die3").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png/v1/fill/w_103,h_105,al_c,q_85,enc_auto/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png\">";
  } else if (dieThree == 6) {
    document.getElementById("die3").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png/v1/fill/w_109,h_115,al_c,q_85,enc_auto/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png\">";
  }



  if (dieFour == 1) {
    document.getElementById("die4").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png/v1/fill/w_106,h_105,al_c,q_85,enc_auto/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png\">";
  } else if (dieFour == 2) {
    document.getElementById("die4").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png/v1/fill/w_102,h_103,al_c,q_85,enc_auto/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png\">";
  } else if (dieFour == 3) {
    document.getElementById("die4").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png/v1/fill/w_109,h_108,al_c,q_85,enc_auto/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png\">";
  } else if (dieFour == 4) {
    document.getElementById("die4").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png/v1/fill/w_107,h_103,al_c,q_85,enc_auto/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png\">";
  } else if (dieFour == 5) {
    document.getElementById("die4").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png/v1/fill/w_103,h_105,al_c,q_85,enc_auto/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png\">";
  } else if (dieFour == 6) {
    document.getElementById("die4").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png/v1/fill/w_109,h_115,al_c,q_85,enc_auto/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png\">";
  }



  if (dieFive == 1) {
    document.getElementById("die5").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png/v1/fill/w_106,h_105,al_c,q_85,enc_auto/78acb0_4dfa9de046f2422b9fc7ff8e675ae256~mv2.png\">";
  } else if (dieFive == 2) {
    document.getElementById("die5").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png/v1/fill/w_102,h_103,al_c,q_85,enc_auto/78acb0_5b984a14dcd74d4d94aedb0ab060af7e~mv2.png\">";
  } else if (dieFive == 3) {
    document.getElementById("die5").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png/v1/fill/w_109,h_108,al_c,q_85,enc_auto/78acb0_0fd0785207d242a686549ec26104c7c2~mv2.png\">";
  } else if (dieFive == 4) {
    document.getElementById("die5").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png/v1/fill/w_107,h_103,al_c,q_85,enc_auto/78acb0_4dea8f8389e84edb88f72af83f3fedaf~mv2.png\">";
  } else if (dieFive == 5) {
    document.getElementById("die5").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png/v1/fill/w_103,h_105,al_c,q_85,enc_auto/78acb0_3a7dcf4902c347929ce2f58a2585e97e~mv2.png\">";
  } else if (dieFive == 6) {
    document.getElementById("die5").innerHTML = "<img src=\"https://static.wixstatic.com/media/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png/v1/fill/w_109,h_115,al_c,q_85,enc_auto/78acb0_4599d063854f418a92d061b9d30179c0~mv2.png\">";
  }



}

function btnOne() {
  let ones = 0;
  // loop through array and see how many ones there are
  for (i = 0; i < dice.length; i = i + 1) {
    if (dice[i] === 1) {
      ones += 1;
    }

    onesGlobal = ones;

    if (onesGlobal !== null && twosGlobal !== null && threesGlobal !== null && foursGlobal !== null && fiveGlobal !== null && sixGlobal !== null) {
      sum();
    }
  }

  // set text to that value
  document.getElementById("onesText").innerHTML = ones * 1;
}

function btnTwo() {
  let twos = 0;
  // loop through array and see how many ones there are
  for (i = 0; i < dice.length; i = i + 1) {
    if (dice[i] === 2) {
      twos += 1;
    }

    twosGlobal = twos * 2;

    if (onesGlobal !== null && twosGlobal !== null && threesGlobal !== null && foursGlobal !== null && fiveGlobal !== null && sixGlobal !== null) {
      sum();
    }
  }

  // set text to that value
  document.getElementById("twosText").innerHTML = twos * 2;
}

function btnThree() {
  let threes = 0;
  // loop through array and see how many ones there are
  for (i = 0; i < dice.length; i = i + 1) {
    if (dice[i] === 3) {
      threes += 1;
    }

    threesGlobal = threes * 3;

    if (onesGlobal !== null && twosGlobal !== null && threesGlobal !== null && foursGlobal !== null && fiveGlobal !== null && sixGlobal !== null) {
      sum();
    }
  }

  // set text to that value
  document.getElementById("threesText").innerHTML = threes * 3;
}

function btnFour() {
  let fours = 0;
  // loop through array and see how many ones there are
  for (i = 0; i < dice.length; i = i + 1) {
    if (dice[i] === 4) {
      fours += 1;
    }

    foursGlobal = fours * 4;

    if (onesGlobal !== null && twosGlobal !== null && threesGlobal !== null && foursGlobal !== null && fiveGlobal !== null && sixGlobal !== null) {
      sum();
    }
  }

  // set text to that value
  document.getElementById("foursText").innerHTML = fours * 4;
}

function btnFive() {
  let fives = 0;
  // loop through array and see how many ones there are
  for (i = 0; i < dice.length; i = i + 1) {
    if (dice[i] === 5) {
      fives += 1;
    }

    fiveGlobal = fives * 5;

    if (onesGlobal !== null && twosGlobal !== null && threesGlobal !== null && foursGlobal !== null && fiveGlobal !== null && sixGlobal !== null) {
      sum();
    }
  }

  // set text to that value
  document.getElementById("fivesText").innerHTML = fives * 5;
}

function btnSix() {
  let sixes = 0;
  // loop through array and see how many ones there are
  for (i = 0; i < dice.length; i = i + 1) {
    if (dice[i] === 6) {
      sixes += 1;
    }

    sixGlobal = sixes * 6;

    if (onesGlobal !== null && twosGlobal !== null && threesGlobal !== null && foursGlobal !== null && fiveGlobal !== null && sixGlobal !== null) {
      sum();
    }
  }

  // set text to that value
  document.getElementById("sixesText").innerHTML = sixes * 6;
}



function sum() {
  var totalSum = parseFloat(onesGlobal) + parseFloat(twosGlobal) + parseFloat(threesGlobal) + parseFloat(foursGlobal) + parseFloat(fiveGlobal) + parseFloat(sixGlobal);
  if (totalSum >= 63) {
    document.getElementById("realbonus").innerHTML = 35;
    document.getElementById("some").innerHTML = totalSum + 35;
  } else {
    document.getElementById("some").innerHTML = totalSum;
  }
}


function holdOne() {
  holdOneV = true;
  document.getElementById("die").classList.add("held");
}

function holdTwo() {
  holdTwoV = true;
  document.getElementById("die2").classList.add("held");
}

function holdThree() {
  holdThreeV = true;
  document.getElementById("die3").classList.add("held");
}

function holdFour() {
  holdFourV = true;
  document.getElementById("die4").classList.add("held");
}

function holdFive() {
  holdFiveV = true;
  document.getElementById("die5").classList.add("held");
}

function reset() {
    holdOneV = false;
    holdTwoV = false;
    holdThreeV = false;
    holdFourV = false;
    holdFiveV = false;

    rolls = 3;
    alert("Rolls Reset")

    document.getElementById("die").classList.remove("held");
    document.getElementById("die2").classList.remove("held");
    document.getElementById("die3").classList.remove("held");
    document.getElementById("die4").classList.remove("held");
    document.getElementById("die5").classList.remove("held");
}

// special buttons

function threeOfAKind() {
  // add total of all dice
  
}

function fourOfAKind() {
  // add total of all dice
}

function fullHouse() {
  // 25

}

function smallStraight() {
  // 30
}

function largeStraight() {
  // 40
  for (i=0; i < dice.length; i+1) {
    if (dice[i] === 1) {
      if (dice[i] === 2) {
        if (dice[i] === 3) {
          if (dice[i] === 4) {
            if (dice[i] === 5) {
              document.getElementById("largestraight").innerHTML = 40;
            } else {
              document.getElementById("largestraight").innerHTML = 0;
            }
          } else {
            document.getElementById("largestraight").innerHTML = 0;
          }
        } else {
          document.getElementById("largestraight").innerHTML = 0;
        }
      } else {
        document.getElementById("largestraight").innerHTML = 0;
      }
    } else if (dice[i] === 2) {
      if (dice[i] === 3) {
        if (dice[i] === 4) {
          if (dice[i] === 5) {
            if (dice[i] === 6) {
              document.getElementById("largestraight").innerHTML = 40;
            }
          } else {
            document.getElementById("largestraight").innerHTML = 0;
          }
        } else {
          document.getElementById("largestraight").innerHTML = 0;
        }
      } else {
        document.getElementById("largestraight").innerHTML = 0;
      }
    } else {
      document.getElementById("largestraight").innerHTML = 0;
    }
  }
}

function chance() {
  // score total of all five dice
  document.getElementById("chance").innerHTML = parseFloat(dieOne) + parseFloat(dieTwo) + parseFloat(dieThree) + parseFloat(dieFour) + parseFloat(dieFive);
}

function yahtzee() {
  if (dieOne == dieTwo && dieTwo == dieThree && dieThree == dieFour && dieFour == dieFive) {
    document.getElementById("yahtzee").innerHTML = 50;
  } else {
    document.getElementById("yahtzee").innerHTML = 0;
  }
}