import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
	const [jugador, setJugador] = useState('');
	const [cards, setCards] = useState([]);
	const [token, setToken] = useState('');
	const [inputCard, setInputCard] = useState('');
	const [clickCount, setClickCount] = useState(0);
	const [win, setWin] = useState(false);
	const [start, setStart] = useState(false);

	const comparePinta = {
		DIAMONDS: 'CLUBS',
		CLUBS: 'DIAMONDS',
		SPADES: 'HEARTS',
		HEARTS: 'SPADES',
	};

	const handleClick = () => {
		setClickCount(clickCount + 1);
	};

	const handleStart = e => {
		setStart(!start);
	};

	const handleChangeJugador = e => {
		setJugador(e.target.value);
	};

	useEffect(() => {
		const query = async () => {
			const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
			const { data } = await axios(url);
			setToken(data.deck_id);
		};
		query();
	}, [start]);

	useEffect(() => {
		const query = async () => {
			const url = `https://deckofcardsapi.com/api/deck/${token}/draw/?count=1`;
			const { data } = await axios(url);
			setInputCard(data.cards);
			console.log(data.cards);
		};
		query();
	}, [start]);

	const handleChangeCard = e => {
		setJugador(e.target.value);
	};

	useEffect(() => {
		const query = async () => {
			const url = `https://deckofcardsapi.com/api/deck/${token}/draw/?count=1`;
			const { data } = await axios(url);
			setCards(data.cards);
		};
		query();
	}, [clickCount]);

	useEffect(() => {
		const query = () => {
		  if (inputCard.length > 0 && cards.length > 0) {
			const pintaContraria = comparePinta[inputCard[0].suit];
			if (pintaContraria === cards[0].suit && inputCard[0].value === cards[0].value) {
			  setWin(true);
			}
		  }
		};
		query();
	  }, [cards, inputCard]);
	  

	return (
		<CardsContext.Provider
			value={{ win, inputCard, clickCount, start, cards, jugador, handleClick, handleChangeJugador , handleStart}}
		>
			{children}
		</CardsContext.Provider>
	);
};

export { CardsProvider };
export default CardsContext;
