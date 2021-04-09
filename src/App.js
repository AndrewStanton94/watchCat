import React from 'react';
import './App.css';
import VideoContainer from './features/videoContainer/VideoContainer';
import linkText from './bookmarklet.js';

const bookmarkletText = `
javascript:( function(){
	${linkText}
})();
`.replace(/\\n|\\t/, '');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hash: undefined,
			addNewVideosLabel: 'Add new videos',
		};
	}

	componentDidMount() {
		// Expecting video information as a URL encoded JSON string starting with the #
		const { hash } = document.location;
		if (hash.length) {
			const decodedHash = decodeURIComponent(hash.slice(1));
			const data = JSON.parse(decodedHash);
			this.setState({
				hash: data,
			});
		}
	}

	appendNewWatchListItems(e) {
		e.preventDefault();
		const additionalWatchList = document.querySelector(
			'#additionalWatchList'
		);
		try {
			const newData = JSON.parse(additionalWatchList.value);
			this.setState({
				hash: [...this.state.hash, ...newData],
			});
			additionalWatchList.value = '';
			this.setState({
				addNewVideosLabel: 'Videos added',
			});
		} catch (error) {
			console.warn(error);
		}
	}

	loadDataFromClipboard() {
		const additionalWatchList = document.querySelector(
			'#additionalWatchList'
		);
		navigator.clipboard
			.readText()
			.then((data) => (additionalWatchList.value = data));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>watchCat</h1>
					<p>Make sense of your YouTube Watch later list</p>
				</header>
				<div className="flex flex-equal gap-5r">
					<section>
						<h2>Set up</h2>
						<p>
							You need to add a bookmarklet (a bookmark that runs
							some code) to your browser. Drag the button to your
							bookmark bar to save it.
						</p>
						<div className="flex flex-center">
							<a className="button" href={bookmarkletText}>
								YouTube Watch later bookmarklet
							</a>
						</div>
						<p>
							I know this isn't an elegant solution but the{' '}
							<a
								href="https://developers.google.com/youtube/v3/revision_history#january-28,-2021"
								rel="no-opener no-referrer"
							>
								YouTube API has been broken for a while and will
								not be fixed.
							</a>
						</p>
					</section>
					<section>
						<h2>How this works</h2>
						<ol>
							<li>
								Go to your{' '}
								<a href="https://www.youtube.com/playlist?list=WL">
									YouTube Watch later list
								</a>
							</li>
							<li>
								Scroll down to the bottom of the page. This
								ensures all the videos are loaded.
							</li>
							<li>
								Then click the bookmarklet link. The code looks
								at all the URLs in the list to find the:
								<ul>
									<li>Video link</li>
									<li>Video Name</li>
									<li>Video duration</li>
									<li>Channel</li>
								</ul>
							</li>

							<li>
								The script opens this app with the video
								information
							</li>
						</ol>
					</section>
				</div>
				<section>
					<h2>Add more videos</h2>
					<form onSubmit={this.appendNewWatchListItems.bind(this)}>
						<fieldset className="flex flex-column">
							<legend>
								Paste the rest of your Watch list in here
							</legend>
							<button
								type="button"
								onClick={this.loadDataFromClipboard}
								className="button m2"
							>
								Load data from the clipboard
							</button>
							<textarea
								id="additionalWatchList"
								rows="10"
								className="m2"
							/>
							<button className="button m2">
								{this.state.addNewVideosLabel}
							</button>
						</fieldset>
					</form>
				</section>
				<VideoContainer videos={this.state.hash} />
			</div>
		);
	}
}

export default App;
