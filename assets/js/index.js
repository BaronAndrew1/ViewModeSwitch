var cssIdSelector = document.querySelector("#css-style-sheet")
var thListButton = document.querySelector("#thList")
var thButton = document.querySelector("#th")

thListButton.addEventListener("click", function() {
cssIdSelector.href="assets/css/index2.css";
});

thButton.addEventListener("click", function() {
cssIdSelector.href="assets/css/index.css";
});
