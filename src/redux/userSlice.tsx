
import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../types/User"
import { RootState } from "./store";
import { Jude, SavedUsers } from "../../constants/User";


export interface InitialState{
    user : IUser | null;
    allUsers : IUser[];
}

const initialState : InitialState ={
    user : null,
    allUsers : SavedUsers,
}

export const userSlice = createSlice({
    name : "data",
    initialState,
    reducers:{
        // set this from the 
        setUser : (state,{payload})=>{
            state.user = payload;
        },
        updateUsers :(state, {payload}) =>{
            const newUsers = [...state.allUsers,payload]
            state.allUsers = newUsers;
        }
    }
});


export const userSelector = (state: RootState) => state.user;

export const {setUser, updateUsers} = userSlice.actions;

export default userSlice.reducer;