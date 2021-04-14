import { useSelector } from 'react-redux';

import { getVideoByName } from '../videoContainer/videoSlice';

function generateLink(id) {
	return `https://www.youtube.com/watch?v=${id}`;
}

export function GetVideo(props) {
	const { video } = useSelector((state) =>
		getVideoByName(state, props.videoTitle)
	);
	return <VideoLink children={props.children} video={video} />;
}

export default function VideoLink(props) {
	const { title, id } = props.video;
	return (
		<div>
			<a href={generateLink(id)}>{title}</a> {props.children}
		</div>
	);
}
