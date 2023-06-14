import { useContext } from 'react';
import CardsContext from '../context/CardsContextJR';

const FormularioJR = () => {
	const { start, jugador, handleChangeJugador, handleStart } =
		useContext(CardsContext);

	return (
		<div>
			<input type='text' value={jugador} onChange={handleChangeJugador} />
			{start ? (
				<p>Buena suerte!! 💗💎🍀♠️</p>
			) : (
				<button onClick={handleStart}>Empezar</button>
			)}
		</div>
	);
};

export default FormularioJR;
