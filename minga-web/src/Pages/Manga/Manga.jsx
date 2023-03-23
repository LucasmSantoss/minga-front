import React,{ useEffect } from 'react'
import './manga.css'
import MangaPortada from '../../components/MangaPortada/MangaPortada'
import InfoCatYcompany from '../../components/InfoCatyCompany/InfoCatYcompany'
import BotonReacciones from '../../components/BottonReacciones/BotonReacciones'
import InfoRectangulo from '../../components/InfoRectangulo/InfoRectangulo'
import DetailButtons from '../../components/DetailButtons/DetailButtons'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import actions from '../../store/Detail/actions'


const { captureManga } = actions
export default function Manga() {

    const dispatch = useDispatch()
    let _id = useParams()
    let manga = useSelector(store => store.manga.manga)

    useEffect(() => {
        dispatch(captureManga({ manga_id: _id.id}))
    }, [])

    return(

        <div className="contenedor">
           {(manga.length!= 0) && <MangaPortada info={manga}/>}
           {(manga.length!= 0) && <InfoCatYcompany info={manga}/>}
           <BotonReacciones />
            <InfoRectangulo />
          {(manga.length!=0) && <DetailButtons  info={manga}/>}
        </div>

    )
}