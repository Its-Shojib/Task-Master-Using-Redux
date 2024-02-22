import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
}

export const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            if (state.tasks.length === 0) {
                state.tasks.push({ id: 1, status: "pending", ...payload });
            } else {
                // let last = state.tasks.at(-1); //find the last task in the list at(-1)
                // state.tasks.push({ id: last.id + 1,...payload });
                state.tasks.push({ id: state.tasks.length + 1, status: "pending", ...payload });
            }
        },
        deleteTask: (state, { payload }) => {
            state.tasks = state.tasks.filter((item) => item.id !== payload);
        },
        updateStatus: (state, { payload }) => {
            state?.tasks?.forEach(task => {
                if (task.id === payload.id) {
                    task.status = payload.status;
                }
            });

        }
    }
});

export const { addTask, deleteTask, updateStatus } = tasksSlice.actions;

export default tasksSlice.reducer;