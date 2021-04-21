import { useSelector } from 'react-redux';

import { getVideosByDuration } from '../videoContainer/videoSlice';
import VideoLink from '../videoLink/VideoLink';

export default function VideosByDuration(props) {
	const durationList = useSelector(getVideosByDuration);
	return (
		<section id="duration">
			<h2>Videos by duration</h2>
			{durationList.map(({ video }, i) => (
				<VideoLink
					classes="flex gap-2r first-child-9ch"
					key={i}
					video={video}
					showDuration
				/>
			))}
		</section>
	);
}
