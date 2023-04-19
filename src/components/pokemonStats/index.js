import { useContext,useEffect, useState } from "react";
import { ThemeContext } from "../Context";
import {ThemeTogglerButton} from"../theme-toggler-buttom"
import { getPokemon, getData, getType, } from "../services";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { PokemonMoves } from "../PokemonMoves"
import { PokemonAbilities } from "../PokemonAbilities";
import { ButtonDefault } from "../Button";
import { PokemonInfo } from "../PokemonInfo";
import styled from "styled-components";

const PokemonStats = () => {
    const {theme} =useContext(ThemeContext)
    const { id } = useParams()
    const [pokemon, setPokemon] = useState({})
    const [ability, setAbility] = useState()


    const fetchPokemon = async () => {
        const pokemon = await getPokemon(id)
        setPokemon(pokemon)
        const abilities = pokemon.abilities.map((ability) => {
            return getData(ability.ability.url)
        })
        const results = await Promise.all(abilities)
        setAbility(results)
    }
    useEffect(() => {
        fetchPokemon()
    }, [])
    return (
        <Section style={{backgroundColor:theme.background}}>
            <Div> <Link to={'/'}><ButtonDefault >Home</ButtonDefault></Link><ThemeTogglerButton/></Div>
            <PokemonInfo pokemon={pokemon} />
            <PokemonMoves pokemon={pokemon} /> 
            <PokemonAbilities pokemon={ability} />
        </Section>
    )
}
const Div = styled.div`
display:flex;
justify-content:space-between;
`
const Section = styled.section`
padding:20px 20px 0 20px;
`
export { PokemonStats }