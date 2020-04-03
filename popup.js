document
.querySelector('#colour-submit-btn')
.addEventListener('click', () => {
  // read the colour that the user has selected
  const colour = document.querySelector('#colour-input').value;
  // get all the google tabs and send a message to their tabs
  chrome.tabs.query({ url: 'https://*.google.com/*' }, tabs => {
    tabs.forEach(tab =>
      chrome.tabs.sendMessage(tab.id, { colour } )
    );
  });
});
