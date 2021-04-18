defaultFilters = [
    "*://*.facebook.com/*",
    "*://*.ask.fm/*",
    "*://*.chess.com/*",
    "*://*.crunchyroll.com/*",
    "*://*.flickr.com/*",
    "*://*.instagram.com/*",
    "*://*.twitter.com/*",
    "*://*.linkedin.com/*",
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel : true }
    },
    { urls: defaultFilters },
    ["blocking"]
)
