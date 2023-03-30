import ButtonCategory from './components/ButtonCategory/ButtonCategory';
import Cards from './components/Cards/Cards';


export default function Manga() {
  return (
    <div>
			<div className='fondo-manga'>
				
				<h1>Mangas</h1>
				<div className='div-input'>
					<input type="search" placeholder="Find your manga here"/>
					<img className='img' src="./form-img/search.png" alt="" />
				</div>
			</div>
			<div className='container-categories'>
				<div className='explore'>
					<h3>Explore</h3>
					<div className='img-category'>
						<img src="./imgs/adventurers.png" alt="category-adventurers" />
						<img src="./imgs/nostalgic.png" alt="category-nostalgic" />
						<img src="./imgs/popular.png" alt="category-popular" />
					</div>

				</div>
				<div className='div-buttons'>
						<ButtonCategory style='todos' text='Todos'/>
						<ButtonCategory style='shonen' text='Shōnen' />
						<ButtonCategory style='seinen' text='Seinen'/>
						<ButtonCategory style='shojo' text='Shōjo' />
						<ButtonCategory style='kodomo' text='Kodomo' />
					</div>
					<div className='div-cards'>
						<Cards />
						<Cards />
						<Cards />
						<Cards />
					</div>
				</div>
			
		</div>
  )
}
