const dotsContainer = document.querySelector('.dots-container')
const dotsInfo = document.querySelector('.dots-info')

dotsContainer.addEventListener('mouseenter', (e) => {
	dotsInfo.classList.toggle('slide')
})
dotsContainer.addEventListener('mouseleave', (e) => {
	dotsInfo.classList.toggle('slide')
})
