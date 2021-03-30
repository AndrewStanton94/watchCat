import React from 'react';
import VideoList from '../videoList/VideoList'

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
			const { channelName, title } = current;
			if (channelNames.includes(channelName)) {
				channels[channelName].push(title);
			} else {
				channels[channelName] = [title];
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
		const processedInputs  = this.processInput(this.props.videos);
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
