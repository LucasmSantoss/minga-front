import './App.css'
import LayoutMain from './layouts/LayoutMain/LayoutMain'
import CardEvent from './components/CardEvent/CardEvent'
import ButtonIndex from './components/ButtonIndex/ButtonIndex'
import { useState,useEffect } from 'react'
import FormRegister from './components/FormRegister/FormRegister'

function App() {

	const [render,setRender] = useState(false)
	/**
	 * @render parámetro para leer el estado (que inicia en false: y no mrenderiza los eventos)
	 * @setRender funcion que modifica el estado (por convencion se escribe la palabra set seguido de camelCase el estado que quiere modificar)
	 */
	let [data,setData] = useState({})
	useEffect(
		()=> {fetch('./data.json').then(res => res.json()).then(res => setData(res))},
		[]
	)
	/**
	 * @funcion que necesita ser controlada (en este caso una peticion que carga el estado con los datos de los eventos)
	 * @array que contiene todos los parámetros que al cambiar (como render de true a false y al revés) ejecutan el efecto (la petición)
	 * en este caso en particular no es necesario un parámetro de ejecución del efecto ya que se va a realizar la petición cada vez que se monte
	 * en el caso del carousel que nunca se desmonta, si o si, necesito un parámetro que ejecute la petición para obtener los datos de la imagen siguiente
	 */

	const handleRender = ()=> {
		setRender(!render)
		console.log(render)
	}

	return (
		<LayoutMain>
		<div class='app-main'>
			<h3>EVENTOS</h3>
			<ButtonIndex style='button-2' text='ver eventos' onClick={handleRender} />
			<div class="app-events" id="events">
				{/* el cambio de estado tiene que condicionar el mapeo */}
				{/* si el estado está en true tiene que mostrar los eventos */}
				{/* si el estado está en false no debe mostrar nada */}
				{/* se suele utilizar la sintaxis del ternario para estos condicionales */}
				{/* (condicion) ? (que hago si es true) : (que hago si es false) */}
				{
					(render) ? (
						data.events.map(each=> <CardEvent key={each._id} data={each} />)
					) : (
						null
					)
				}
			</div>
		</div>
		//LayoutMain
		<div class='app-main'>
				<h3>Create Category</h3>
				
		</div>
		</LayoutMain>
	)
}

export default App