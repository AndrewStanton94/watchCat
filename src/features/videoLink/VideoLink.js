import { useSelector } from 'react-redux';

import { getVideoByName } from '../videoContainer/videoSlice';
import VideoDuration from '../videoDuration/VideoDuration';

function generateLink(id) {
	return `https://www.youtube.com/watch?v=${id}`;
}

export function GetVideo(props) {
	const { video } = useSelector((state) =>
		getVideoByName(state, props.videoTitle)
	);
	return (
		<VideoLink
			children={props.children}
			video={video}
			showDuration={props.showDuration}
		/>
	);
}

export default function VideoLink(props) {
	const { title, id } = props.video;
	const { showDuration } = props;
	return (
		<div>
			{showDuration && <VideoDuration video={props.video} /> }
			<a href={generateLink(id)}>{title}</a>
			{props.children}
		</div>
	);
}
