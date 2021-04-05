import React from 'react';
import { useSelector } from 'react-redux';

import { GetVideo } from '../videoLink/VideoLink';

import { getOneVideoChannels, getMultiVideoChannels } from './channelSlice';

export default function ChannelContainer() {
	const oneVideoChannels = (
		<ul>
			{useSelector(getOneVideoChannels).map(
				([channelName, videoTitle], i) => (
					<li>
						<GetVideo videoTitle={videoTitle[0]} key={i}>
							<span>by {channelName}</span>
						</GetVideo>
					</li>
				)
			)}
		</ul>
	);
	const multiVideoChannels = useSelector(getMultiVideoChannels).map(
		([channel, videos]) => {
			return (
				<section>
					<h4>{channel}</h4>
					<ul>
						{videos.map((video) => (
							<li>
								<GetVideo videoTitle={video} />
							</li>
						))}
					</ul>
				</section>
			);
		}
	);
	console.log(multiVideoChannels);

	return (
		<section>
			<h2>Your Channels</h2>
			<div className="flex flex-equal gap-5r">
				<div>
					<h3>Channels with only one video</h3>
					{oneVideoChannels}
				</div>
				<div>
					<h3>Channels with multiple videos</h3>
					{multiVideoChannels}
				</div>
			</div>
		</section>
	);
}
