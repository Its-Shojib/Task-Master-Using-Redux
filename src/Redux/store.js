import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './Features/Tasks/TaskSlice';

const store = configureStore({
    reducer: {
        tasks: taskReducer
    },  
});

export default store;