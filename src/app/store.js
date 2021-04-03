import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import videoSlice from '../features/videoContainer/videoSlice';
import channelSlice from '../features/channelContainer/channelSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		videos: videoSlice,
		channels: channelSlice,
	},
});
