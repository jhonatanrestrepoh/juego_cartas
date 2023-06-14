
import ButtonJR from './components/ButtonJR';
import Jugador from './components/FormularioJR';
import ImagenJR from './components/ImagenJR';

import { CardsProvider } from './context/CardsContextJR';


const App = () => {
	return (
		<CardsProvider>
			<Jugador />
			<br />
			<ButtonJR/>

			
			<ImagenJR/>
		</CardsProvider>
	);
};

export default App;
