import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './Features/Tasks/TaskSlice';
import userReducer from './Features/Users/UserSlice';


const store = configureStore({
    reducer: {
        taskSlice: taskReducer,
        userSlice: userReducer
    },  
});

export default store;