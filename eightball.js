// Magic 8-ball
function magic () {
  var random = Math.floor(Math.random() * 4);

  if (random === 0) {
    return "yes";
  }
  if (random === 1) {
    return "no";
  }
  if (random === 2) {
    return "Maybe you should ask Google?";
  }
  if (random === 3) {
    return "365";
  }
}
function answer() {
  var answer = magic();
  document.getElementById("answer_field").innerHTML = "Magic 8ball says: " + answer;
  document.getElementById("question").value = "";
}
