import React from 'react'
import './buttoncategory.css'

export default function ButtonCategory(props) {
  return (
    <button className={props.style}>{props.text}</button>
  )
}
