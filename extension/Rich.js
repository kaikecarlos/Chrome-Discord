function setStatus(tabId, changeInfo, tab) {
    if (tab.active === true && ! (tab.url == undefined)) {
            var url = new URL(tab.url);

            var data = {
                url: tab.url,
                details: url.hostname,
                state: tab.title,
                smallText: tab.title,
                largeText: tab.url
            };

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "http://127.0.0.1:3000/", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(data));
            console.log(data);
    }
}



console = chrome.extension.getBackgroundPage().console;

console.log("carregou toperson");

chrome.tabs.onUpdated.addListener(setStatus);

//setInterval(() => {
//  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      //  var url = tabs[0].url;     //url
    //   var title = tabs[0].title;   //title
  //     setStatus({type: "youtube", title, url});
 //});
//}, 3000);