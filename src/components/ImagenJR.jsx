import { useContext } from 'react';
import CardsContext from '../context/CardsContextJR';

const ImagenJR = () => {
	const { inputCard, cards } = useContext(CardsContext);

	return (
		<div>
			{inputCard.length > 0 && (
				<div>
					<p>Tu carta de juego</p>
					{inputCard.map((card, index) => (
						<img key={index} src={card.image} alt={card.code} />
					))}
				</div>
			)}

			{cards.length > 0 && (
				<div>
					<p>Carta comparación</p>
					{cards.map((card, index) => (
						<img key={index} src={card.image} alt={card.code} />
					))}
				</div>
			)}
		</div>
	);
};

export default ImagenJR;
