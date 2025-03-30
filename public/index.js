document.addEventListener("DOMContentLoaded", () => {
  async function SayHello() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) {
      console.error("No active tab found.");
      return;
    }
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
       console.log(inputData)
      },
    });
  }
  
  const sendBtn = document.getElementById("send-btn");
  const inputBox = document.getElementById("txt-input");
  if (sendBtn) {
    sendBtn.addEventListener("click", SayHello);
  } else {
    console.error('send-btn not found');
  }
});

if(inputBox){
  inputBox.addEventListener("onChange",(e)=>{
    
  })
}
