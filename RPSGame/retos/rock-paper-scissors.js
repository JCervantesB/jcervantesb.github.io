var rock = "Rock";
var paper = "Paper";
var scissors = "Scissors";

var game = function (player1, player2) {
  // First conditional to verify that both players select a valid option
  if (!player1 || !player2 || (!player1 && !player2)) {
    return "Please both select a valid option =)";
  }
  // Second conditional to determine who won
  else if (player1 != player2) {
    if (player1 === rock && player2 === scissors) {
      return "Player 1 wins with " + rock;
    } else if (player1 === paper && player2 === rock) {
      return "Player 1 wins with " + paper;
    } else if (player1 === scissors && player2 === paper) {
      return "Player 1 wins with " + scissors;
    } else if (player2 == paper || player2 == rock || player2 == scissors) {
      return "Player 2 wins with " + player2;
    } else {
        return "Please both select a valid option =)";
    }
  }
  //Last conditional to all the options of draw (If both players selected the same option)
  else if (player1 === player2) {
    return "Draw";
  }
};
