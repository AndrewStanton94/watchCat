import React from 'react';
import UtilTable from '../utilComponents/UtilTable';
import VideoLink from '../videoLink/VideoLink';
import VideoDuration from '../videoDuration/VideoDuration';
import ChannelLink from '../channelLink/ChannelLink';

export default class VideoList extends React.Component {
	prepareData(videos) {
		return videos.map(({ video, channel }) => {
			return [
				<VideoLink video={video} />,
				<VideoDuration video={video} />,
				<ChannelLink channel={channel} />,
			];
		});
	}

	render() {
		return (
			<section>
				<h2>Your Videos</h2>
				<UtilTable
					headers={['Video', 'Duration', 'Channel']}
					data={this.prepareData(this.props.videos)}
				/>
			</section>
		);
	}
}
