import { useContext } from 'react';
import CardsContext from '../context/CardsContextJR';

const ButtonJR = () => {
	const { clickCount, handleClick, win } = useContext(CardsContext);

	return (
		<div>
			<input type='text' value={clickCount} />

			{win ? (
				<p>¡Ganaste! 🎉🃏🎉</p>
			) : (
				<button onClick={handleClick}>Generar carta</button>
			)}
		</div>
	);
};

export default ButtonJR;
