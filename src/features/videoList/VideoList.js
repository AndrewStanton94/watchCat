import React from 'react';
import UtilTable from '../utilComponents/UtilTable';

export default class VideoList extends React.Component {
	prepareData(videos) {
		return videos.map(({ video, channel }) => {
			console.log({ ...video, channel });
			return [
				<a href={video.id}>{video.title}</a>,
				<p>{video.duration}</p>,
				<a href={channel.id}>{channel.name}</a>,
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
