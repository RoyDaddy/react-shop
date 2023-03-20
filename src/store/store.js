import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from "./userSlice";

export let {setName, setAge} = user.actions;

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
        addCartCount(state, actions) {
            if(state.find(el => el.id == actions.payload).count){
                state.find(el => el.id == actions.payload).count++;
            }else{
                state.find(el => el.id == actions.payload).count = 1;
            }
        },
        addCartList(state, actions) {
            let el = actions.payload;
            if(!state.find(elIn => elIn.id == el.id)) {
                state.push(el);
            }
        },
        deleteCartList(state, actions) {
            let idx = state.findIndex(el => el.id == actions.payload);
            state.splice(idx, 1);
        },
    }
});
export let {addCartCount, addCartList, deleteCartList} = cartList.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cartList: cartList.reducer,
    }
})