import { useSelector } from 'react-redux';

import { getVideosByDuration } from '../videoContainer/videoSlice';
import VideoLink from '../videoLink/VideoLink';

export default function VideosByDuration(props) {
	const durationList = useSelector(getVideosByDuration);
	return (
		<section id="duration">
			<h2>Videos by duration</h2>
			{durationList.map(({ video }, i) => (
				<VideoLink key={i} video={video} showDuration />
			))}
		</section>
	);
}
