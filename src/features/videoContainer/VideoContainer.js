import React from 'react';

export default class VideoContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	listRender() {
		const { videos } = this.props;
		if (videos) {
			return videos.map((vid, i) => <p key={i}>{vid.title}</p>);
		}
	}
	render() {
		return (
			<section>
				<h2>You Videos</h2>
				{this.listRender()}
			</section>
		);
	}
}
