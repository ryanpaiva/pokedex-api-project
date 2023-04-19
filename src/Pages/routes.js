import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './Home'
import { PokemonDetails } from './pokeStats'
const AppRouter = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/pokemonStats/:id' element={<PokemonDetails/>} />
            </Routes>
        </BrowserRouter>

    )
}
export { AppRouter }