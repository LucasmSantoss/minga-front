import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const readMangas = createAsyncThunk(
    "readMangas",
    async ({ page, inputText, categories, order, headers }) => {
        try{
            let response = await axios.get("http://localhost:8080/api/manga/?page="+page+"&title="+inputText.trim()+"&category="+categories+"&order="+order,headers)
            console.log(response)
            return { mangas: response.data.mangas}
            
        }catch(error){
            return { mangas: '' }
        }
    }
)

const actions = { readMangas }
export default actions