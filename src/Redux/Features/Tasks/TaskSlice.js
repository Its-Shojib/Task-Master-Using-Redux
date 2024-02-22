import {createSlice} from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            state = state.filter(task => task.id!== action.payload);
        },
        updateStatus: (state, action) => {
            state.forEach(task => {
                if (task.id === action.payload.id) {
                    task.status = action.payload.status;
                }
            });
        }
    }
})