import {createSlice} from "@reduxjs/toolkit";

let user = createSlice({
    name: "user",
    initialState: {
        name: 'kim',
        age: 20
    },
    reducers : {
        setName: function(state) {
            state.name = 'park';
        },
        setAge: function(state, action) {
            state.age += action.payload;
        }
    }
});

export default user;