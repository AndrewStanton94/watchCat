(() => {
	// Extract text and URLs from all links in the Watch later list
	const watchListLinksQueryString =
		'#contents.style-scope.ytd-playlist-video-list-renderer a';
	const videoLinks = [
		...document.querySelectorAll(watchListLinksQueryString),
	].map(({ href, innerText }) => ({ href, innerText }));

	const videoData = [];

	// Aggregates the information from the 3 links per video
	const extractData = (videoLinks) => {
		// Duration from preview link
		const { innerText: durationText } = videoLinks.shift();
		// Title and URL from video name
		const { innerText: title, href } = videoLinks.shift();
		// Channel name and URL
		const {
			innerText: channelName,
			href: channelLink,
		} = videoLinks.shift();

		let duration,
			watched = false;

		// Duration is either the first or second item
		const durationComponents = durationText.split('\n');
		switch (durationComponents.length) {
			case 2:
				duration = durationComponents[0];
				break;

			case 3:
				duration = durationComponents[1];
				watched = true;
				break;

			default:
				break;
		}

		videoData.push({
			duration,
			watched,
			title,
			href,
			channelName,
			channelLink,
		});
	};

	while (videoLinks.length) {
		extractData(videoLinks);
	}

	const payload = JSON.stringify(videoData);
	const baseURL = 'http://localhost:3000/';
	const redirectURL = [baseURL, '#', payload].join('');
	window.open(redirectURL, '_blank');
})();
