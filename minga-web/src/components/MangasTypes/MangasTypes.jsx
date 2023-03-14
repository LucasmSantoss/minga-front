import React from 'react'
import "./MangasTypes.css"
import { useState, useEffect} from 'react'
import categoriesActions from "../../store/Categories/actions"
import sortActions from "../../store/Sort/actions"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import axios from 'axios'

let categoriesCheck = []
let order = 1

export default function MangasTypes() {
    const [categories, setCategories] = useState(false)
    const { captureCheck} = categoriesActions
    const dispatch = useDispatch()

    let checkedCategories = useSelector(store => store.categories.categories)

    let url = "http://localhost:8080/api/category"
    
    useEffect(() => {
      axios.get(url).then(e => setCategories(e.data.data))
    }, [])

    function handleCheck(e){
      
      categories.forEach( category => {
        if(category.name === e.target.firstChild.textContent){
          if(!categoriesCheck.includes(category._id)){
            categoriesCheck.push(category._id)
          }else{
            categoriesCheck = categoriesCheck.filter( e => e !== category._id )
          }
          dispatch(captureCheck({categories: categoriesCheck.join()}))
        }
      })
      e.target.classList.toggle("checked")
    }
    const { captureSort } = sortActions

    function handleSort(){
      if(order === 1){
          order = -1
      }else if(order === -1){
        order = 1
      }
        dispatch(captureSort({order}))
    }

    return (
            <div className='mangasTypes'>
              {
                categories ? categories.map((category,i) => {
                  let checkclass = checkedCategories.includes(category._id) ? "checked" : ""
                  return <div className={"category-"+category.name+" "+ checkclass} key={i} onClick={handleCheck} >{category.name}</div>
                }) : ""
              }
              </div>
                  
                
  )
}
