import React from 'react';
import { useDispatch } from 'react-redux';

import WordFrequency from '../wordFrequency/WordFrequency';
import VideosByDuration from '../videosByDuration/VideosByDuration';
import VideoList from '../videoList/VideoList';
import ChannelContainer from '../channelContainer/ChannelContainer';

import { setVideoList } from './videoSlice';
import { setChannelList } from '../channelContainer/channelSlice';

const videoDurationInSeconds = ({ duration: durationString }) => {
	if (!durationString) {
		// If no duration was included
		return NaN;
	}
	// Order reversed to make the format consistent
	const [sec, mins, hours] = durationString.split(':').reverse();
	let duration = parseInt(sec);
	duration += parseInt(mins) * 60;
	duration += hours ? parseInt(hours) * 3600 : 0;
	return duration;
};

const processInput = (videoData) => {
	if (!videoData) {
		return undefined;
	}
	const initialValue = {
		channels: {},
		videos: [],
		wordFreq: {},
	};
	const processedData = videoData.reduce((acc, current) => {
		const { channels, wordFreq } = acc;
		const channelNames = Object.keys(channels);
		const { video, channel } = current;
		const { title } = video;
		const durationInSeconds = videoDurationInSeconds(video);
		const { name } = channel;
		if (channelNames.includes(name)) {
			channels[name].push(title);
		} else {
			channels[name] = [title];
		}

		const titleWords = title
			.toLowerCase()
			.replaceAll(/[+?|~/()!,[\]—:]|\s-\s|\.+/g, ' ')
			.split(' ');
		for (const word of titleWords) {
			const count = wordFreq[word] || 0;
			wordFreq[word] = count + 1;
		}

		acc.channels = channels;
		acc.videos.push({ video: { ...video, durationInSeconds }, channel });
		acc.wordFreq = wordFreq;
		return acc;
	}, initialValue);

	return processedData;
};

export default function VideoContainer(props) {
	const dispatch = useDispatch();

	// Process fresh data
	const processedInputs = processInput(props.videos);

	// Check for saved data
	const jsonVideo = localStorage.getItem('videos');
	const jsonChannels = localStorage.getItem('channels');
	const jsonWordFreq = localStorage.getItem('wordFreq');

	// Bail if no data
	if (!processedInputs && !(jsonVideo && jsonChannels && jsonWordFreq)) {
		return null;
	}

	// Reference fresh data, default to previous
	const videos = processedInputs?.videos ?? JSON.parse(jsonVideo);
	const channels = processedInputs?.channels ?? JSON.parse(jsonChannels);
	const wordFreq = processedInputs?.wordFreq ?? JSON.parse(jsonWordFreq);

	// Save any fresh data
	if (processedInputs) {
		localStorage.setItem('videos', JSON.stringify(videos));
		localStorage.setItem('channels', JSON.stringify(channels));
		localStorage.setItem('wordFreq', JSON.stringify(wordFreq));
	}

	dispatch(setVideoList(videos));
	dispatch(setChannelList(channels));
	return (
		<>
			<WordFrequency words={wordFreq} />
			<VideosByDuration />
			<ChannelContainer />
			<VideoList />
		</>
	);
}
