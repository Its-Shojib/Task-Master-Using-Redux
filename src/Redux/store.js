import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        tasks: {}
    },  
});

export default store;