import React from 'react';
import { useSelector } from 'react-redux';

import { GetVideo } from '../videoLink/VideoLink';

import { getOneVideoChannels, getMultiVideoChannels } from './channelSlice';

export default function ChannelContainer() {
	const oneVideoChannels = (
		<ul>
			{useSelector(getOneVideoChannels).map(
				([channelName, videoTitle], i) => (
					<li key={i}>
						<GetVideo videoTitle={videoTitle[0]}>
							<span> by {channelName}</span>
						</GetVideo>
					</li>
				)
			)}
		</ul>
	);
	const multiVideoChannels = useSelector(getMultiVideoChannels).map(
		([channel, videos], i) => {
			return (
				<details open key={i} className="mv2 multiVideoChannel">
					<summary className="mb1">
						<h4 className="inline">
							[x{videos.length}] {channel}
						</h4>
					</summary>
					<ul>
						{videos.map((video, i) => (
							<li key={i}>
								<GetVideo videoTitle={video} showDuration />
							</li>
						))}
					</ul>
				</details>
			);
		}
	);

	const querySetAttribute = (query, attribute, value) => {
		document
			.querySelectorAll(query)
			.forEach((elem) => (elem[attribute] = value));
	};

	return (
		<section>
			<h2 id="channels">Your Channels</h2>
			<div className="flex flex-equal gap-5r">
				<div>
					<h3 className="mt0">Channels with only one video</h3>
					{oneVideoChannels}
				</div>
				<div>
					<h3 className="mt0">Channels with multiple videos</h3>
					<div className="flex justify-evenly">
						<button
							type="button"
							className="button m0"
							onClick={() => {
								querySetAttribute(
									'.multiVideoChannel',
									'open',
									true
								);
							}}
						>
							Open all channel lists
						</button>
						<button
							type="button"
							className="button m0"
							onClick={() => {
								querySetAttribute(
									'.multiVideoChannel',
									'open',
									false
								);
							}}
						>
							Close all channel lists
						</button>
					</div>
					{multiVideoChannels}
				</div>
			</div>
		</section>
	);
}
