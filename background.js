let color = "#3aa757";
browser.runtime.onInstalled.addListener(()=>{
  browser.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  
})
console.log("123123");
