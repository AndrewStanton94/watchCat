import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../app/store';
import VideoContainer from './VideoContainer';

import sampleData from './videoSample.json';

describe('VideoContainer Component renders', () => {
	test('Works with no input', () => {
		render(
			<Provider store={store}>
				<VideoContainer />
			</Provider>
		);
	});

	test('Works with hash', () => {
		render(
			<Provider store={store}>
				<VideoContainer videos={sampleData} />
			</Provider>
		);

		screen.getByText('Common words from video titles');
		screen.getByText('Videos by duration');
		screen.getByText('Your Channels');
		screen.getByText('Channels with only one video');
		screen.getByText('Your Videos');
	});
});
