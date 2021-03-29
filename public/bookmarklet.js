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
		console.log(durationText);
		const duration = durationText.split('\n')[0];
		console.log(duration);

		videoData.push({ duration, title, href, channelName, channelLink });
	};

	while (videoLinks.length) {
		extractData(videoLinks);
	}

	const payload = JSON.stringify(videoData);
	const baseURL = 'http://localhost:3000/';
	const redirectURL = [baseURL, '#', payload].join('');
	window.open(redirectURL, '_blank');
})();
