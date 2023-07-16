import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
           state.push(action.payload)
        },
        removeUser(state, action) {
            const { id } = action.payload;
            return state.filter(user => user.id !== id);
        },
        updateUser(state, action) {
            const { id, name, email } = action.payload
            const exitingUser = state.find((user) => user.id === id)
            if (exitingUser) {
                exitingUser.name = name;
                exitingUser.email = email;
            }
        }
    }
})

export const { addUser, removeUser, updateUser } = userSlice.actions
export default userSlice.reducer