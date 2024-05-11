export function snapScroll(container) {
	const scrollPosition = container.value.scrollTop
	const containerHeight = container.value.clientHeight
	const snapPoints = container.value.querySelectorAll('.snap-always')

	// Find the closest snap point
	let minDistance = Infinity
	let closestSnapIndex = 0

	snapPoints.forEach((snapPoint, index) => {
		const snapTop = snapPoint.offsetTop
		const snapBottom = snapTop + snapPoint.clientHeight // Calculate the bottom edge
		const distance = Math.abs(snapTop - scrollPosition + containerHeight / 2)

		if (
			distance < minDistance &&
			scrollPosition >= snapTop &&
			scrollPosition <= snapBottom
		) {
			// Check if the scroll position is within the snap point
			minDistance = distance
			closestSnapIndex = index
		}
	})

	// Scroll to the closest snap point smoothly
	const closestSnapPoint = snapPoints[closestSnapIndex]
	container.value.scrollTo({
		top: closestSnapPoint.offsetTop,
		behavior: 'smooth',
		duration: 1000,
	})
}
