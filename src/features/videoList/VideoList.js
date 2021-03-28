import React from 'react';
import UtilTable from '../utilComponents/UtilTable';

export default class VideoList extends React.Component {
	render() {
		return (
			<section>
				<h2>Your Videos</h2>
				<UtilTable data={this.props.videos} />
			</section>
		);
	}
}
