(() => {
	const watchListLinksQueryString =
		'#contents.style-scope.ytd-playlist-video-list-renderer a';
	const videoLinks = [
		...document.querySelectorAll(watchListLinksQueryString),
	].map(({ href, innerText }) => ({ href, innerText }));

	const videoData = [];

	const extractData = (videoLinks) => {
		const { innerText: durationText } = videoLinks.shift();
		const { innerText: title, href } = videoLinks.shift();
		const {
			innerText: channelName,
			href: channelLink,
		} = videoLinks.shift();
		const durationComponents = durationText.split('\n');

		let duration,
			watched = false;

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
