import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name: "user",
    initialState: "kim",
    reducers : {
        setName(state) {
            return `john ${state}`;
        }
    }
});
export let {setName} = user.actions;

let stock = createSlice({
   name: "stock",
   initialState: [10, 11, 12]
});

let cartList = createSlice({
   name: "cartList",
   initialState: [
       {id : 0, name : 'White and Black', count : 2},
       {id : 2, name : 'Grey Yordan', count : 1}
   ],
    reducers : {
        setCartList(state) {
            state[0].count++
            return state;
        }
    }
});
export let {setCartList} = cartList.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cartList: cartList.reducer,
    }
})