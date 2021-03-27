const src = `

const watchListLinksQueryString =
	'#contents.style-scope.ytd-playlist-video-list-renderer a';
const videoLinks = [
	...document.querySelectorAll(watchListLinksQueryString),
].map(({ href, innerText }) => ({ href, innerText }));

const videoData = [];

const extractData = (videoLinks) => {
	const { innerText: durationText } = videoLinks.shift();
	const { innerText: title, href } = videoLinks.shift();
	const { innerText: channelName, href: channelLink } = videoLinks.shift();
	const duration = durationText.split('\n')[0];

	videoData.push({ duration, title, href, channelName, channelLink });
};

while (videoLinks.length) {
	extractData(videoLinks);
}

const payload = JSON.stringify(videoData);
const baseURL = 'http://localhost:3000/';
const redirectURL = [baseURL, '#', payload].join('');
console.log(payload);
window.open(redirectURL, '_blank');
`;
export default src;
