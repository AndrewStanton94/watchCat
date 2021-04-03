import React from 'react';
import { useSelector } from 'react-redux';
import { getOneVideoChannels, getMultiVideoChannels } from './channelSlice';

const listRender = (list = [], show = false) => {
	if (list) {
		return list.map((item, i) => <p key={i}>{show ? item[show] : item}</p>);
	}
};

export default function ChannelContainer() {
	const oneVideoChannels = useSelector(getOneVideoChannels);
	const multiVideoChannels = useSelector(getMultiVideoChannels);
	return (
		<section>
			<h2>Your Channels</h2>
			<div className="flex flex-40pc">
				<div>
					<h3>Channels with only one video</h3>
					<div>{listRender(oneVideoChannels, '0')}</div>
				</div>
				<div>
					<h3>Channels with multiple videos</h3>
					<div>{listRender(multiVideoChannels, '0')}</div>
				</div>
			</div>
		</section>
	);
}
