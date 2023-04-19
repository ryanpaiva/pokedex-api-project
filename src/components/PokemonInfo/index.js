import styled from "styled-components"
const PokemonInfo = (props) => {
    const { pokemon } = props
    return (

        <Div>
            <div>
                <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
            </div>
            <Box>
                <h2>Name: {pokemon.name}</h2>
                <h2>Base experience: {pokemon.base_experience}xp</h2>
                <Type>
                    <h2>Type(s):</h2>
                    <Span>{
                        pokemon.types?.map((type, index) => {
                            if (pokemon.types.length - 1 === index) {
                                return (
                                <Span key={index}> {type.type.name}
                                </Span>)
                            } else {
                                return (
                                    <Span key={index}>
                                        {type.type.name} and
                                    </Span>)
                            }
                        })}</Span>
                </Type>
            </Box>
        </Div>
    )
}
const Span = styled.span`
font-size:30px;`
const Type = styled.div`
display:flex;
`
const Img = styled.img`
max-width:100%;
`
const Div = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
font-size:20px;
`
const Box = styled.div`
display:flex;
gap:20px;
flex-direction:column;
`
export { PokemonInfo }