import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './Features/Tasks/TaskSlice';

const store = configureStore({
    reducer: {
        taskSlice: taskReducer
    },  
});

export default store;