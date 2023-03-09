chrome.runtime.onMessage.addListener((msg, sender, res) => {
  if (msg.name == "message") {
    res({ text: "this is is response" });
  }
});
