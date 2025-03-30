console.log("Bridge-Wallet content script loaded.");

// Example: communicate with the background script
chrome.runtime.sendMessage({ type: "PING" }, (response) => {
  console.log("Response from background:", response);
});
