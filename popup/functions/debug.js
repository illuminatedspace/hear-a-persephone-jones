console.log("DEBUG");
function modifyGameLog() {
  var gameLogNode = document.querySelector(".GameWidget-Log-Content");
  if (!gameLogNode) {
    var mainNode = document.querySelector(".Main-Body");
    gameLogNode = document.createElement("div");
    gameLogNode.className = "GameWidget-Log-Content";
    mainNode.appendChild(gameLogNode);
  }
  gameLogNode.innerText = Math.ceil(Math.random() * 10);
  window.setTimeout(function () {
    modifyGameLog();
  }, 3000);
}
modifyGameLog();
