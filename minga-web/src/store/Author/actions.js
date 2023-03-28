// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const read_author = createAsyncThunk(
//     'read_author',
//     async () => {
//         let token = localStorage.getItem('token')
//         let headers = { headers: { 'Authorization': `Bearer ${token}` } }
//         let url = 'http://localhost:8080/api/authors/me'
//         try{
//             let response = await axios.get(url,headers)
//             return{
//                 author: response.data.me
//             }
//         }catch(error){
//             return{
//                 author: []
//             }
//         }
//     }
// )

// const update_author = createAsyncThunk(
//     'update_author',
//     async ({data}) => {
//         let token = localStorage.getItem('token')
//         let headers = { headers: { 'Authorization': `Bearer ${token}` } }
//         let url = 'http://localhost:8080/api/authors/me'
//         try{
//             let response = await axios.put(url,data,headers)
//             console.log(response.data);
//             return{
//                 author: response.data.author
//             }
            
//         }catch(error){
//             console.log(error);
//             return{
//                 author: []
//             }
//         }
//     }
// )

// const actions = {read_author,update_author}

// export default actions


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const read_author = createAsyncThunk("read_author", async ({ author_id }) => {
  try {
    let res = await axios.get("http://localhost:8080/api/authors/" + author_id);
    return { author: res.data.data };
  } catch (error) {
    return { author: [] };
  }
});
const read_all_authors = createAsyncThunk("read_all_authors", async () => {
  try {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let res = await axios.get("http://localhost:8080/api/authors/admin/prueba", headers);
    //console.log(res)
    return { active_authors: res.data.authorActive, inactive_authors: res.data.authorInactive };
  } catch (error) {
    console.log(error)
    return { active_authors: [], inactive_authors: [] };
  }
});

const update_author = createAsyncThunk(
  'update_author',
  async ({ data }) => {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    let url = 'http://localhost:8080/api/authors/me'
    try {
      let response = await axios.put(url, data, headers)
      return {
        author: response.data.author
      }

    } catch (error) {
      console.log(error);
      return {
        author: []
      }
    }
  }
)
const update_active_author = createAsyncThunk(
  "update_active_author",
  async ({ _id, active }) => {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
      let response = await axios.put(`http://localhost:8080/api/authors/admin/${_id}`, { active: active }, headers);
      return {
        author: response.data.author,
        success: true
      }
    } catch (error) {
      //console.log(error);
      return {
        author: [],
        success: true
      }
    }
  }
)

const authorActions = { read_author, update_author, read_all_authors, update_active_author };
export default authorActions;

