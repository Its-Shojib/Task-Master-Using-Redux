import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "Mir Hussain",
    email: "mir@gmail.com",
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            if (state.users.length === 0) {
                state.users.push({ id: 1, ...payload });
            } else {
                // let last = state.users.at(-1); //find the last user in the list at(-1)
                // state.users.push({ id: last.id + 1,...payload });
                state.users.push({ id: state.users.length + 1, ...payload });
            }
        },
        deleteUser: (state, { payload }) => {
            state.users = state.users.filter((item) => item.id !== payload);
        },
        updateUser: (state, { payload }) => {
            state?.users?.forEach(user => {
                if (user.id === payload.id) {
                    user.name = payload.name;
                }
            });
        },
    }
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;