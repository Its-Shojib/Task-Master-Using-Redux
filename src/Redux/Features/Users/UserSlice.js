import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
};

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            if (state.users.length === 0) {
                state.users.push({ id: 1,...payload });
            } else {
                // let last = state.users.at(-1); //find the last user in the list at(-1)
                // state.users.push({ id: last.id + 1,...payload });
                state.users.push({ id: state.users.length + 1,...payload });
            }
        },
        deleteUser: (state, { payload }) => {
            state.users = state.users.filter((item) => item.id!== payload);
        },
        updateUser: (state, { payload }) => {
            state?.users?.forEach(user => {
                if (user.id === payload.id) {
                    user.name = payload.name;
                }
            });
        }
    }
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;