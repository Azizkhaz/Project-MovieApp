import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'

const  movieSlice = createSlice({
    name:"movie",
    initialState:[
        {
            id:uuidv4(),
            title:"superman redux",
            image:"https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
            description:"description redux",
            rate:1000
        },
        {
            id:uuidv4(),
            title:"mario redux",
            image:"https://www.nintendo.com/eu/media/images/08_content_images/others_2/characterhubs/supermariohub/MarioHub_Overview_Mario_sideimg_mario.png",
            description:"description redux",
            rate:1000
        }
    ] ,
    reducers:{
        setMovie:(state,action)=>{
            return action.payload
        }
    }

})
export const {setMovie} = movieSlice.actions

export default movieSlice.reducer