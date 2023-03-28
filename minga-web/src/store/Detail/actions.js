import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let captureManga = createAsyncThunk(
    'captureManga',
    async ({ manga_id }) => {
        try {
            let response = await axios.get(`https://minga-back-m-20.onrender.com/api/manga/` + manga_id)
            return {
                manga: response.data.manga
            }
        } catch (error) {
            console.log(error)
            return {
                manga: []
            }
        }
    }
)
const captureChapter = createAsyncThunk(
    'captureChapter',
    async ({ manga_id, page }) => {
        try {
            let response = await axios.get("https://minga-back-m-20.onrender.com/api/chapters?manga_id=" + manga_id + "&page=" + page)
            return { chapter: response.data.chapter }
        } catch (error) {
            return { chapter: [] }
        }
    }
)

const actions = { captureChapter, captureManga}

export default actions  