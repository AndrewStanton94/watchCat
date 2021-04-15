import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
	name: 'videos',
	initialState: {
		videos: [],
	},
	reducers: {
		setVideoList: (state, action) => {
			state.videos = action.payload;
		},
		addVideos: (state, action) => {
			state.videos = [...state.videos, ...action.payload];
		},
	},
});

export const { setVideoList, addVideos } = videoSlice.actions;

export const getVideos = (state) => state.videos.videos;
export const getVideoByName = (state, title) =>
	state.videos.videos.find(({ video }) => video.title === title);
export const getVideosWithTitleSubstring = (state, keyword) =>
	state.videos.videos.filter(({ video }) =>
		video.title.toLowerCase().includes(keyword)
	);

export default videoSlice.reducer;
