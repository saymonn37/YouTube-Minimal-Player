;(function () {
	function getVideoId() {
		let e = window.location.search.match(/[?&]v=([^&]+)/)
		return e ? e[1] : null
	}

	function cleanPlayer() {
		let e = getVideoId()
		if (!e) return
		document.body.innerHTML = ''
		let t = document.createElement('div')
		t.style.position = 'absolute'
		t.style.top = '0'
		t.style.left = '0'
		t.style.width = '100%'
		t.style.height = '100%'
		t.style.display = 'flex'
		document.body.appendChild(t)

		let o = document.createElement('div')
		o.style.flex = '0 0 70%'
		o.style.height = '100%'
		o.style.position = 'relative'
		t.appendChild(o)

		let r = document.createElement('iframe')
		r.src = 'https://www.youtube.com/embed/' + e + '?autoplay=1'
		r.style.border = 'none'
		r.style.width = '100%'
		r.style.height = '100%'
		o.appendChild(r)

		let mode = sessionStorage.getItem('playerMode')
		if (mode === 'live') {
			let c = document.createElement('div')
			c.style.flex = '0 0 30%'
			c.style.height = '100%'
			c.style.position = 'relative'
			t.appendChild(c)

			let s = document.createElement('iframe')
			s.src = 'https://www.youtube.com/live_chat?v=' + e + '&embed_domain=' + window.location.hostname
			s.style.border = 'none'
			s.style.width = '100%'
			s.style.height = '100%'
			c.appendChild(s)

			s.onload = function () {
				setTimeout(() => removeChatElements(s), 2000)
			}
		}
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
			let banner = doc.querySelector('yt-live-chat-banner-renderer')
			if (banner) banner.remove()

			let card = doc.querySelector('#card.style-scope.yt-live-chat-viewer-engagement-message-renderer')
			if (card) card.remove()
		}

		removeElements()

		let observer = new MutationObserver(() => {
			removeElements()
		})

		observer.observe(doc.body, { childList: true, subtree: true })
	}

	window.addEventListener('DOMContentLoaded', function () {
		let mode = sessionStorage.getItem('playerMode')
		if (mode === 'live') {
			cleanPlayer()
		}
	})
})()
