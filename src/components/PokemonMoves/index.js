import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../Context"
const PokemonMoves = (props) => {
    const { pokemon } = props
    const {theme} = useContext(ThemeContext)

    return (
        <Div>
            <h3> Moves  </h3>
            <Box>
                {pokemon.moves?.slice(0, 28).map((move, index) => {
                    if (pokemon.moves.length === 1) {
                        return (
                            <Span style={{backgroundColor:theme.movesColor}} key={index}> {move.move.name} </Span>
                        )
                    } if (pokemon.moves.length - 1 === index) {
                        return (
                            <Span style={{backgroundColor:theme.movesColor}} key={index}> {move.move.name}. </Span>
                        )
                    } else {
                        return (
                            <Span style={{backgroundColor:theme.movesColor}} key={index}> {move.move.name} </Span>
                        )
                    }

                })} </Box>
        </Div>
    )
}
const Div = styled.div`
margin-top:20px;
font-family: 'PixelGameFont', sans-serif;
font-size:20px;
display:flex;
color:#000;
flex-direction:column;
align-items:center;
gap:10px;
`
const Box =styled.span`
display:flex;
gap:10px;
gap:10px;
flex-wrap:wrap;
`
const Span=styled.span`
box-shadow:  0 5px 10px rgba(15,15,15,0.25);
border-radius:15px;
padding:10px 15px;
`
export { PokemonMoves }