chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Process requests from the content scripts or popup
  if (request.type === 'PING') {
    sendResponse({ message: 'PONG' });
  }
  // Add additional listeners as needed.
});
