import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
}

export const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            state.tasks.push(payload);
        },
        // deleteTask: (state, action) => {
        //     state = state.filter(task => task.id!== action.payload);
        // },
        // updateStatus: (state, action) => {
        //     state.forEach(task => {
        //         if (task.id === action.payload.id) {
        //             task.status = action.payload.status;
        //         }
        //     });
        // }
    }
});

export const { addTask, deleteTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;