import { useSelector } from 'react-redux';

import { getVideoByName } from '../videoContainer/videoSlice';

function generateLink(id) {
	return `https://www.youtube.com/watch?v=${id}`;
}

export function GetVideo(params) {
	const { video } = useSelector((state) =>
		getVideoByName(state, params.videoTitle)
	);
	return <VideoLink children={params.children} video={video} />;
}

export default function VideoLink(props) {
	const { title, id } = props.video;
	return (
		<div>
			<a href={generateLink(id)}>{title}</a> {props.children}
		</div>
	);
}
