
const beforeNavListener = (details)=>{
    const originalUrl = details.url;
    const newUrl = originalUrl.replace("wikipedia.org","m.wikipedia.org");
    const newUrlObj = {
        url:newUrl
    };
    chrome.tabs.update(details.tabId, newUrlObj);
}
const filters = {
    url:[
        // match wikipedia.org
        // exclude m.wikipedia.org
        {urlMatches:"https*://.*[^.m][.]wikipedia.org.*"}
    ]
}

chrome.webNavigation.onBeforeNavigate.addListener(
    beforeNavListener,
    filters
)