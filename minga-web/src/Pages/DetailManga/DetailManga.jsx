import React from 'react'
import './detailmanga.css'
import TitleDetail from '../../components/TitleDetail/TitleDetail'
import EmojiDetail from '../../components/EmojiDetail/EmojiDetail'
import BodyDetail from '../../components/BodyDetail/BodyDetail'

export default function Detail() {
  return (
    <div>
        <TitleDetail />
        <EmojiDetail />
        <BodyDetail />
    </div>
  )
}



