import React,{ useEffect } from 'react'
import './manga.css'
import MangaPortada from '../../components/MangaPortada/MangaPortada'
import InfoCatYcompany from '../../components/InfoCatyCompany/InfoCatYcompany'
import BotonReacciones from '../../components/BottonReacciones/BotonReacciones'
import InfoRectangulo from '../../components/InfoRectangulo/InfoRectangulo'
import SeccionBtn from '../../components/SeccionBtn/SeccionBtn'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import actions from '../../store/Detail/actions'


const { captureManga,delete_chapter } = actions
export default function Manga() {

    const dispatch = useDispatch()
    let _id = useParams()
    let manga = useSelector(store => store.mangas.manga)
    console.log(manga)
   
    
    console.log(useSelector(store => store))
    useEffect(() => {
        dispatch(captureManga({ manga_id: _id.id}))
        dispatch(delete_chapter())

    }, [])
console.log(manga)
    return (

        <div className="contenedor">
           { manga.length!= 0?<MangaPortada info={manga}/>: null}
           { manga.length!= 0?<InfoCatYcompany info={manga}/>:null}
           <BotonReacciones />
            <InfoRectangulo />
          {manga.length!=0?<SeccionBtn  info={manga}/> : null}
        </div>

    )
}
