chrome.runtime.sendMessage({ name: "message" }, (res) => {
  document.querySelector("body").innerHTML = res.text;
});
