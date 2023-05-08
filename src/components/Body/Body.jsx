import rickAndMortyApi from '../api/rickAndMortyApi';
import LoadingMore from './LoadingMore';
import './Body.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Body({ theme }) {
	const { data, loadMore } = rickAndMortyApi();

	console.log(data);

	return (
		<div className="list-all-personajes">
			{data.map((per, key) => (
				<div key={key} className={`tarjeta-personaje ${'tarjeta-personaje-' + theme}`}>
					<h2>{per.name}</h2>
					<AiOutlineStar className="aiStar" size={'1.9em'} />
					<p>Status: {per.status}</p>
					<p>Gender: {per.gender}</p>
					<img src={per.image} alt={per.name} />
				</div>
			))}
			<LoadingMore loadMore={loadMore} />
		</div>
	);
}

export default Body;
