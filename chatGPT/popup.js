document.addEventListener("DOMContentLoaded", function() {
    var changeColorButton = document.getElementById("changeColor");
    changeColorButton.addEventListener("click", function() {
        chrome.scripting.executeScript({
            target: {tabId: tab.id()},
            func: ((color) => document.body.style.backgroundColor=color),
            args: ["red"]
        });
    });
});