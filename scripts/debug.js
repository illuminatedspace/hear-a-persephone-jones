console.log("DEBUG");
function modifyGameLog() {
  // need to add conditional to check and see if one exists
    var mainNode = document.querySelector(".Main-Body");

    var gameWidgetNode = document.createElement("div");
    gameWidgetNode.className = "GameWidget";

    var widgetLogLine = document.createElement("div")
    widgetLogLine.className = "Widget-Log-Line"

    gameWidgetNode.appendChild(widgetLogLine);
    mainNode.appendChild(gameWidgetNode);

    widgetLogLine.innerText = Math.ceil(Math.random() * 10);
  window.setTimeout(function () {
    modifyGameLog();
  }, 3000);
}
modifyGameLog();
