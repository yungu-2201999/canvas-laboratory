(() => {
  var guesses = 0; // 按键次数
  var message = `Guess the number between (lower) and (higher)`;
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var today = new Date();
  var letterToGuess = "";
  var higherOrLower = "";
  var lettersGuessed;
  var gameOver = false;

  function initGame() {
    var letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];
    guesses = 0;
    lettersGuessed = [];
    gameOver = false;
    window.addEventListener("keydown", onKeyDown, true);
    drawScreen();

    function onKeyDown(event) {
      if (gameOver) return;
      var letterPressed = String.fromCharCode(event.keyCode);
      letterPressed = letterPressed.toLowerCase();
      guesses++;
      lettersGuessed.push(letterPressed);

      if (letterPressed === letterToGuess) {
        gameOver = true;
      } else {
        letterIndex = letters.indexOf(letterToGuess);
        guessIndex = letters.indexOf(letterPressed);
        console.log(guessIndex);
        if (guessIndex < letterIndex) {
          higherOrLower = "lower";
        } else {
          higherOrLower = "higher";
        }
      }
      drawScreen();
    }

    function drawScreen() {
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#ffffaa";
      ctx.fillRect(0, 0, 500, 300);

      ctx.strokeStyle = "#000000";
      ctx.strokeRect(5, 5, 490, 290);

      ctx.textBaseline = "top";
      ctx.fillStyle = "#000000";
      ctx.font = "10px Arial";
      ctx.fillText(new Date().toLocaleString(), 150, 150);

      ctx.fillStyle = "#FF0000";
      ctx.font = "14px Sans-serif";
      ctx.fillText(message, 125, 30);

      ctx.fillStyle = "#109910";
      ctx.font = "16px Sans-serif";
      ctx.fillText(`Higher or Lower: ${higherOrLower}`, 150, 125);

      ctx.fillStyle = "#FF0000";
      ctx.font = "16px Sans-serif";
      ctx.fillText(`Letters Guessed: ${lettersGuessed.toString()}`, 10, 260);

      if (gameOver) {
        ctx.fillStyle = "#FF0000";
        ctx.font = "40px Sans-serif";
        ctx.fillText(`You Got It`, 150, 180);
      }

      const btn = document.getElementById("btn");
      btn.style.display = "block";
      btn.addEventListener("click", () => {
        location.href = canvas.toBlob((blob) => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `canvas-game-${today.toLocaleString()}.png`;
          a.click();
          URL.revokeObjectURL(url);
        });
      });
    }
  }
  initGame();
})();
