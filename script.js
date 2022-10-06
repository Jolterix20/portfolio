document
	.querySelector('meta[name=viewport]')
	.setAttribute(
		'content',
		'width=device-width, initial-scale=' +
			Number(1 / window.devicePixelRatio)
	)

const dotsContainer = document.querySelector('.dots-container')
const dotsInfo = document.querySelector('.dots-info')

dotsContainer.addEventListener('mouseenter', (e) => {
	dotsInfo.classList.toggle('slide')
})
dotsContainer.addEventListener('mouseleave', (e) => {
	dotsInfo.classList.toggle('slide')
})
