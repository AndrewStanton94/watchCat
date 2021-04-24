(() => {
	const watchlistURL = 'https://www.youtube.com/playlist?list=WL';
	if (window.location.href !== watchlistURL) {
		const goto = window.confirm(
			'Do you want to go to your YouTube watch list?'
		);
		if (goto) {
			window.open(watchlistURL, '_blank');
		} else {
			return;
		}
	}
	// Extract text and URLs from all links in the Watch later list
	const watchListLinksQueryString =
		'#contents.style-scope.ytd-playlist-video-list-renderer a';
	const videoLinks = [
		...document.querySelectorAll(watchListLinksQueryString),
	].map(({ href, innerText }) => ({ href, innerText }));

	const videoData = [];

	const prepareVideoInfo = (durationText, title, href) => {
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

		return {
			duration,
			watched,
			title,
			id: new URL(href).searchParams.get('v'),
		};
	};

	const prepareChannel = (channelName, channelLink) => {
		const [type, id] = channelLink
			.replace('https://www.youtube.com/', '')
			.split('/');

		return {
			name: channelName,
			type,
			id,
		};
	};

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

		videoData.push({
			video: prepareVideoInfo(durationText, title, href),
			channel: prepareChannel(channelName, channelLink),
		});
	};

	while (videoLinks.length) {
		extractData(videoLinks);
	}

	const payload = JSON.stringify(videoData.slice(0, 174));
	const remainingVideos = JSON.stringify(videoData.slice(174));
	const baseURL = 'https://andrewstanton94.github.io/watchCat/';
	const redirectURL = [baseURL, '#', payload].join('');
	window.open(redirectURL, '_blank');

	if (remainingVideos.length) {
		const styling = document.createElement('link');
		styling.href = `${baseURL}bookmarklet.css`;
		styling.rel = 'stylesheet';
		document.querySelector('body').append(styling);

		const modal = document.createElement('div');
		const container = document.createElement('div');
		const h1 = document.createElement('h1');
		const p = document.createElement('p');
		const copyButton = document.createElement('button');
		const closeButton = document.createElement('button');

		modal.id = 'bookmarkModal';
		h1.innerText = 'You have a lot of videos to watch';
		p.innerText = `There are too many to load into the app automatically. Please use the button below to copy the remaining videos and paste them into the app.`;

		copyButton.innerText = 'Copy the rest of your videos';
		copyButton.addEventListener('click', (e) => {
			navigator.clipboard
				.writeText(remainingVideos)
				.then(() => (copyButton.innerText = 'Links copied'))
				.catch((err) => console.warn(err));
		});

		closeButton.innerText = 'Close';
		closeButton.classList.add('close')
		closeButton.addEventListener('click', (e) => {
			modal.remove();
			styling.remove();
		});

		container.append(h1, p, copyButton, closeButton);
		modal.append(container);
		document.querySelector('body').append(modal);
	}
})();
