function triggerPopup(tab) {
  chrome.tabs.executeScript(tab.id, {file: "bookmarklet.js"});
}

chrome.browserAction.onClicked.addListener(triggerPopup);

chrome.commands.onCommand.addListener(function (command) {
  if (command == "trigger-popup")
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      triggerPopup(tabs[0]);
    });
});
