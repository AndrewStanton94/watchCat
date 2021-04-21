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
export const getVideosByDuration = (state) =>
	/* Sort into ascending order, NaN values filtered */
	state.videos.videos
		.filter(({ video }) => !isNaN(video.durationInSeconds))
		.sort(({ video: video1 }, { video: video2 }) => {
			const { durationInSeconds: d1 } = video1;
			const { durationInSeconds: d2 } = video2;
			return d1 - d2;
		});

export default videoSlice.reducer;
