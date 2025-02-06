;(function () {
	function cleanPlayer() {
		const e = document.querySelector('.html5-video-player')
		if (e) {
			const t = document.body
			t.innerHTML = ''
			t.appendChild(e)
			e.style.position = 'absolute'
			e.style.top = '0'
			e.style.left = '0'
			e.style.width = '100%'
			e.style.height = '100%'
		}
	}

	window.addEventListener('DOMContentLoaded', () => {
		let mode = sessionStorage.getItem('playerMode')
		if (mode === 'video') {
			cleanPlayer()
		}
	})
})()
