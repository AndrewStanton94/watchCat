import React from 'react';
import { useSelector } from 'react-redux';

import UtilTable from '../utilComponents/UtilTable';
import VideoLink from '../videoLink/VideoLink';
import VideoDuration from '../videoDuration/VideoDuration';
import ChannelLink from '../channelLink/ChannelLink';

import { getVideos } from '../videoContainer/videoSlice';

const prepareData = (videos) => {
	return videos.map(({ video, channel }) => {
		return [
			<VideoLink video={video} />,
			<VideoDuration video={video} />,
			<ChannelLink channel={channel} />,
		];
	});
};

export default function VideoList() {
	const videos = useSelector(getVideos);
	return (
		<section>
			<h2 id="videos">Your Videos</h2>
			<UtilTable
				headers={['Video', 'Duration', 'Channel']}
				data={prepareData(videos)}
			/>
		</section>
	);
}
