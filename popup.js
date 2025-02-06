document.addEventListener('DOMContentLoaded', function () {
	let videoToggle = document.getElementById('toggleVideo')
	let liveToggle = document.getElementById('toggleLive')

	// Pobranie aktualnego stanu playerMode z sessionStorage danej karty
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		let tabId = tabs[0].id

		chrome.scripting.executeScript(
			{
				target: { tabId: tabId },
				function: () => sessionStorage.getItem('playerMode'),
			},
			result => {
				let mode = result[0]?.result || 'off'
				videoToggle.checked = mode === 'video'
				liveToggle.checked = mode === 'live'
			}
		)
	})

	videoToggle.addEventListener('change', function () {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			let tabId = tabs[0].id
			let mode = videoToggle.checked ? 'video' : 'off'

			liveToggle.checked = false

			chrome.scripting.executeScript({
				target: { tabId: tabId },
				function: mode => {
					sessionStorage.setItem('playerMode', mode)
					location.reload()
				},
				args: [mode],
			})
		})
	})

	liveToggle.addEventListener('change', function () {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			let tabId = tabs[0].id
			let mode = liveToggle.checked ? 'live' : 'off'

			videoToggle.checked = false

			chrome.scripting.executeScript({
				target: { tabId: tabId },
				function: mode => {
					sessionStorage.setItem('playerMode', mode)
					location.reload()
				},
				args: [mode],
			})
		})
	})
})
