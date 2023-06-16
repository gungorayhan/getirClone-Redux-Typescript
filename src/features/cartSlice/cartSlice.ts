import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import { Product } from "../../models"

export interface ICartItem{
    cart:Product,
    quantity:number
}

interface IinitialState {
carts:ICartItem[],
isLoading:boolean,
isSucces:boolean,
isError:boolean,
message:string
}


const initialState:IinitialState ={
carts:[],
isLoading:false,
isSucces:false,
isError:false,
message:""
}


export const cartSlice=createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{

        addToCart:(state,action:PayloadAction<ICartItem>)=>{
            state.carts.push(action.payload)
        },

        removeFromCart:(state,action:PayloadAction<Product>)=>{
         state.carts=state.carts.filter(cartItem=>cartItem.cart.id !== action.payload.id)
          
        },

        clearCart:(state)=>{
            state.carts=[]
        }
        
    }

})


export const {addToCart,removeFromCart,clearCart} = cartSlice.actions

export default cartSlice.reducer