;(function () {
	function getVideoId() {
		const match = window.location.search.match(/[?&]v=([^&]+)/)
		return match ? match[1] : null
	}

	function cleanPlayer() {
		const videoId = getVideoId()
		if (!videoId) return

		const existingPlayer =
			document.querySelector('ytd-player') ||
			document.querySelector('.html5-video-player') ||
			document.querySelector('#movie_player')

		if (!existingPlayer) {
			setTimeout(cleanPlayer, 200)
			return
		}

		document.body.innerHTML = ''
		document.body.style.margin = '0'
		document.body.style.padding = '0'
		document.body.style.backgroundColor = '#000'
		document.body.style.overflow = 'hidden'

		const container = document.createElement('div')
		container.style.position = 'fixed'
		container.style.top = '0'
		container.style.left = '0'
		container.style.width = '100vw'
		container.style.height = '100vh'
		container.style.display = 'flex'
		container.style.backgroundColor = '#000'
		container.style.fontFamily = 'Arial, sans-serif'

		const videoContainer = document.createElement('div')
		videoContainer.style.flex = '0 0 70%'
		videoContainer.style.height = '100%'
		videoContainer.style.display = 'flex'
		videoContainer.style.justifyContent = 'center'
		videoContainer.style.alignItems = 'center'
		videoContainer.style.overflow = 'hidden'
		videoContainer.style.backgroundColor = '#000'
		videoContainer.style.position = 'relative'

		existingPlayer.style.width = '100%'
		existingPlayer.style.height = '100%'
		existingPlayer.style.position = 'relative'
		existingPlayer.style.display = 'block'

		videoContainer.appendChild(existingPlayer)

		const videoElement = existingPlayer.querySelector('video')
		if (videoElement) {
			videoElement.style.width = '100%'
			videoElement.style.height = '100%'
			videoElement.style.objectFit = 'contain'
			videoElement.style.objectPosition = 'center center'
			videoElement.style.backgroundColor = '#000'
			videoElement.style.display = 'block'
		}

		container.appendChild(videoContainer)

		const mode = sessionStorage.getItem('playerMode')
		if (mode === 'live') {
			const chatContainer = document.createElement('div')
			chatContainer.style.flex = '0 0 30%'
			chatContainer.style.height = '100%'
			chatContainer.style.borderLeft = '1px solid #333'
			chatContainer.style.backgroundColor = '#0f0f0f'
			chatContainer.style.position = 'relative'

			const chatFrame = document.createElement('iframe')
			chatFrame.src = `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}`
			chatFrame.style.border = 'none'
			chatFrame.style.width = '100%'
			chatFrame.style.height = '100%'
			chatFrame.style.display = 'block'

			chatContainer.appendChild(chatFrame)

			chatFrame.onload = function () {
				setTimeout(() => removeChatElements(chatFrame), 2000)
			}

			container.appendChild(chatContainer)
		}

		document.body.appendChild(container)

		const style = document.createElement('style')
		style.textContent = `
			* { box-sizing: border-box; }
			html, body { 
				margin: 0 !important; 
				padding: 0 !important; 
				overflow: hidden !important; 
				background: #000 !important; 
				width: 100% !important;
				height: 100% !important;
			}
			ytd-player, .html5-video-player, #movie_player { 
				width: 100% !important; 
				height: 100% !important; 
				position: relative !important; 
				display: block !important;
				background: #000 !important;
			}
			video, .html5-main-video { 
				width: 100% !important; 
				height: 100% !important; 
				object-fit: contain !important; 
				object-position: center center !important; 
				background: #000 !important; 
				display: block !important;
				position: relative !important;
			}
			.html5-video-container {
				display: flex !important;
				align-items: center !important;
				justify-content: center !important;
				width: 100% !important;
				height: 100% !important;
			}
			.ytp-chrome-bottom {
				width: 100% !important;
				left: 0 !important;
				right: 0 !important;
			}
			.ytp-chrome-top,
			.ytp-gradient-top,
			.ytp-gradient-bottom,
			.ytp-chrome-controls {
				z-index: 1000 !important;
			}
		`
		document.head.appendChild(style)

		// MutationObserver pilnujący playera
		const observer = new MutationObserver(() => {
			const container = document.querySelector('.html5-video-container')
			if (container) {
				container.style.display = 'flex'
				container.style.alignItems = 'center'
				container.style.justifyContent = 'center'
			}
			const controls = document.querySelector('.ytp-chrome-bottom')
			if (controls) {
				controls.style.width = '100%'
				controls.style.left = '0'
				controls.style.right = '0'
			}
		})
		observer.observe(document.body, { childList: true, subtree: true })
	}

	function removeChatElements(iframe) {
		let doc
		try {
			doc = iframe.contentDocument || iframe.contentWindow.document
		} catch (e) {
			return
		}
		if (!doc) return

		function removeElements() {
			const elementsToRemove = [
				'yt-live-chat-banner-renderer',
				'#card.style-scope.yt-live-chat-viewer-engagement-message-renderer',
				'yt-live-chat-viewer-engagement-message-renderer',
				'.yt-live-chat-banner-manager'
			]
			elementsToRemove.forEach(selector => {
				const elements = doc.querySelectorAll(selector)
				elements.forEach(el => el.remove())
			})
		}

		removeElements()

		const observer = new MutationObserver(removeElements)
		if (doc.body) {
			observer.observe(doc.body, { childList: true, subtree: true })
		}
	}

	function waitForPlayer() {
		const mode = sessionStorage.getItem('playerMode')
		if (mode === 'live') {
			cleanPlayer()
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', waitForPlayer)
	} else {
		waitForPlayer()
	}
})()
