import { createSlice } from '@reduxjs/toolkit';

export const channelSlice = createSlice({
	name: 'channels',
	initialState: {
		channels: [],
	},
	reducers: {
		setChannelList: (state, { payload }) => {
			const ordered = Object.entries(payload).sort(
				([, first], [, second]) => first.length - second.length
			);
			state.channels = ordered;
		},
		addChannels: (state, action) => {
			state.videos = [...state.videos, ...action.payload];
		},
	},
});

export const { setChannelList, addChannels } = channelSlice.actions;

export const getChannels = (state) => state.channels.channels;

export const getOneVideoChannels = (state) =>
	state.channels.channels.filter(([, videos]) => videos.length === 1);
export const getMultiVideoChannels = (state) =>
	state.channels.channels.filter(([, videos]) => videos.length > 1);

export default channelSlice.reducer;
