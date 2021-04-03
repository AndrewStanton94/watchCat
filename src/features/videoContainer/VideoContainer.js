import React from 'react';
import { useDispatch } from 'react-redux';

import VideoList from '../videoList/VideoList';
import ChannelContainer from '../channelContainer/ChannelContainer';

import { setVideoList } from './videoSlice';

const processInput = (videoData) => {
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
};

export default function VideoContainer(props) {
	const dispatch = useDispatch();
	const processedInputs = processInput(props.videos);
	if (!processedInputs) {
		return null;
	}
	const { videos, channels } = processedInputs;
	dispatch(setVideoList(videos));
	return (
		<>
			<VideoList />
			<ChannelContainer channels={channels} />
		</>
	);
}
