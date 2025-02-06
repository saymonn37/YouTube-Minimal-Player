chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.local.set({ playerMode: 'off' })
})
chrome.action.onClicked.addListener(async t => {
	if (t.url.includes('youtube.com/watch')) {
		chrome.scripting.executeScript({ target: { tabId: t.id }, files: ['contentScript.js'] })
	}
})
