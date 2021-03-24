let game;
let totalTime = 30;
let startTime;
let endTime;
let result = 0;

// making moles appear on gameboard

function buildMoles() {
  if ($('#timer-display').text() >= 1) { $(".moles").removeClass("active-mole");
  let moles = [];
  for (i = 0; i < 3; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    moles.push(randomNumber);
  }

  moles.forEach(function (mole) {
    $(`.mole${mole}`).addClass("active-mole");
  });

  buildRabbit();
  } else {
      $('.moles').removeClass('active-mole')
      $('.moles').removeClass('active-rabbit')
  }
}
// making rabbit appear on gameboard

function buildRabbit() {
  $(".moles").removeClass("active-rabbit");
  let moles = [];
  for (i = 0; i < 1; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    moles.push(randomNumber);
  }
  moles.forEach(function (mole) {
    $(`.mole${mole}`).addClass("active-rabbit");
  });
}

// start buttons section
function easyGame() {
  setInterval(buildMoles, 1000);
}

function hardGame() {
  setInterval(buildMoles, 300);
}

const timeLeftDisplay = $("#timer-display");
const startButtonEasy = $(".starteasy");
const startButtonHard = $(".starthard");

startButtonEasy.click(function (event) {
    $(this).attr("disabled", true);
    easyGame()
    countDown()
    // turn on clock and end game when clock reaches 0.
});

startButtonHard.click(function () {
    $(this).attr("disabled", true);
    hardGame()
    countDown()
    // turn on clock and end game when clock reaches 0.
});

// Countdown timer function

function countDown() {

    let timeLeft = 30;

    setInterval(function () {
        if (timeLeft <= 0) {
        clearInterval((timeLeft = 0));
        startButtonEasy.attr("disabled", false);
        startButtonHard.attr("disabled", false);
        }
        timeLeftDisplay.html(timeLeft);
        timeLeft -= 1;
    }, 1000);
}
// startButtonEasy.click(countDown);
// startButtonHard.click(countDown);


// adding points for hitting moles
// here is where im having trouble below, not sure this is right?
// const addPoints = function () {
  $(".active-mole").click(function () {
    console.log("Test");
    
    $(".score").text(result + 1);
  });
// };
