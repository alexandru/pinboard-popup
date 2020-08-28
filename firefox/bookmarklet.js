function windowGetSelection(callback) {
  var code = "window.getSelection().toString();";
  chrome.tabs.executeScript({code: code}, callback);
}

function triggerPopup2(tab) {
  chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"});
}

function triggerPopup(tab) {
  windowGetSelection(function (d) {
    var title = encodeURIComponent(tab.title);
    var url = encodeURIComponent(tab.url);
    var desc = encodeURIComponent(d);
    var next = encodeURIComponent("https://pinboard.in/");

    var windowURL = "https://pinboard.in/add?showtags=yes&url="+url+"&title="+title+'&description='+desc+"&next="+next;
    chrome.windows.create({
      url: windowURL,
      width: 800,
      height: 600,
      type: "popup"
    });
  });
}

chrome.browserAction.onClicked.addListener(function (tab) {
  triggerPopup(tab);
});

chrome.commands.onCommand.addListener(function (command) {
  if (command == "trigger-popup")
    chrome.tabs.query({active: true}, function (tabs) {
      triggerPopup(tabs[0]);
    });
});
