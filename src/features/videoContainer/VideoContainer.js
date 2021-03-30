import React from 'react';
import VideoList from '../videoList/VideoList';

export default class VideoContainer extends React.Component {
	processInput(videoData) {
		if (!videoData) {
			return undefined;
		}
		const initialValue = {
			channels: {},
			videos: [],
		};
		const processedData = videoData.reduce((acc, current) => {
			const { channels } = acc;
			const channelNames = Object.keys(channels);
			const { video, channel } = current;
			const { title } = video;
			const { name } = channel;
			if (channelNames.includes(name)) {
				channels[name].push(title);
			} else {
				channels[name] = [title];
			}

			acc.channels = channels;
			acc.videos.push(current);
			return acc;
		}, initialValue);

		return processedData;
	}

	listRender(list = [], show = false) {
		if (list) {
			return list.map((item, i) => (
				<p key={i}>{show ? item[show] : item}</p>
			));
		}
	}
	render() {
		const processedInputs = this.processInput(this.props.videos);
		if (!processedInputs) {
			return null;
		}
		const { videos, channels } = processedInputs;
		return (
			<section>
				<VideoList videos={videos} />
				<h2>Your Channels</h2>
				{this.listRender(Object.keys(channels))}
			</section>
		);
	}
}
