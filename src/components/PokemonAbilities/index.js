import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../Context"
const PokemonAbilities = (props) => {
   const { pokemon } = props
   const { theme } = useContext(ThemeContext)
   return (
      <Section>
         <H3> Abilities </H3>
         <Div>
            {pokemon?.map((ability, index) => {
               return (
                  <P style={{ backgroundColor: theme.abilityColor }}
                     key={index}>
                     <h3>{ability.name}</h3>
                     <Span>Effect: {ability.effect_entries[0].effect ? ability.effect_entries[1].effect :
                        ("There's no description of this ability")}</Span>
                  </P>)
            })}
         </Div>
      </Section>
   )
}
const H3 = styled.h3`
font-size:20px;
`
const Span = styled.span`
padding:20px;`
const Div = styled.div`
padding:30px;
display:flex;
flex-direction:column;
gap:20px;
`
const P = styled.p`
padding:10px;
display:flex;
flex-direction:column;
align-items:center;
border-radius:15px;`

const Section = styled.section`
align-items:center;
margin-top:20px;
display:flex;
flex-direction:column;
gap:20px;
`
export { PokemonAbilities }