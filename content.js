chrome.runtime.onMessage.addListener(request => {
  if (request.colour) {
    document.body.style.backgroundColor = request.colour;
  }
});
