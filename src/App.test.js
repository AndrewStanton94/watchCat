import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

describe('Header test', () => {
	test('Page header is rendered', () => {
		const { getByText } = render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		expect(getByText(/watchCat/i)).toBeInTheDocument();
	});
});

describe('First load state', () => {
	test('Has bookmarklet link', async () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(screen.queryByText('bookmarklet')).toBeNull();

		const bookmarkletLink = await screen.findByTestId('saveBookmarklet');
		expect(bookmarkletLink).toBeInTheDocument();
		expect(bookmarkletLink).toHaveAttribute('href');
	});
});
