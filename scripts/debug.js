console.log("DEBUG");
function modifyGameLog() {
  // need to add conditional to check and see if one exists
    var mainNode = document.querySelector(".Main-Body");
    var gameWidgetNode = document.querySelector(".GameWidget");
    var widgetLogLineNode = document.querySelector(".Widget-Log-Line");

    if (!gameWidgetNode) {
      gameWidgetNode = document.createElement("div");
      gameWidgetNode.className = "GameWidget";

      if (!widgetLogLineNode) {
        widgetLogLineNode = document.createElement("div")
        widgetLogLineNode.className = "Widget-Log-Line"
        gameWidgetNode.appendChild(widgetLogLineNode);
      }

      mainNode.appendChild(gameWidgetNode);
    } 

    widgetLogLineNode.innerText = Math.ceil(Math.random() * 10);
  window.setTimeout(function () {
    modifyGameLog();
  }, 3000);
}
modifyGameLog();
