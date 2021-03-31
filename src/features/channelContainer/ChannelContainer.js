import React from 'react';

export default class ChannelContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: [],
			oneVideoChannels: [],
			multiVideoChannels: [],
		};
	}

	componentDidMount() {
		const orderedChannels = this.prepareChannelList(this.props.channels);
		const oneVideoChannels = orderedChannels.filter(
			([, videos]) => videos.length === 1
		);
		const multiVideoChannels = orderedChannels.filter(
			([, videos]) => videos.length > 1
		);
		this.setState({
			channels: orderedChannels,
			oneVideoChannels,
			multiVideoChannels,
		});
	}

	listRender(list = [], show = false) {
		if (list) {
			return list.map((item, i) => (
				<p key={i}>{show ? item[show] : item}</p>
			));
		}
	}

	prepareChannelList(channels) {
		const channelList = Object.entries(channels);
		const ordered = channelList.sort(
			([, first], [, second]) => first.length - second.length
		);
		return ordered;
	}

	render() {
		return (
			<section>
				<h2>Your Channels</h2>
				<div className="flex flex-40pc">
					<div>
						<h3>Channels with only one video</h3>
						<div>
							{this.listRender(this.state.oneVideoChannels, '0')}
						</div>
					</div>
					<div>
						<h3>Channels with multiple videos</h3>
						<div>
							{this.listRender(this.state.multiVideoChannels, '0')}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
