import { getPokemons, getData, getType } from "../services";
import { ThemeContext } from "../Context";
import { ThemeTogglerButton } from "../theme-toggler-buttom"
import React, { useContext, useEffect, useState } from "react"
import { PokeCard } from "../pokeCard";
import Logo from "../navBar/images/pokemon-logo.png"
import styled from "styled-components";
import { ButtonDefault } from "../Button";

const PokeList = () => {
    const { theme } = useContext(ThemeContext)
    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState(10)

    const fetchPokemons = async () => {
        const data = await getPokemons(limit)
        const promise = data.results.map(async (pokemon) => {
            return await getData(pokemon.url)
        })
        const results = await Promise.all(promise)
        setPokemons(results)
    }
    const onClickHandler = () => {
        setLimit(limit + 10)
        fetchPokemons()
    }
    useEffect(() => {
        fetchPokemons()
    }, [limit])
    return (
        <Section style={{ backgroundColor: theme.background }}>
            <Img src={Logo} />
            <ThemeTogglerButton />
            <Div>
                {pokemons.map((pokemon, index) => {
                    return (
                        <div key={index}>
                            <PokeCard pokemon={pokemon}></PokeCard>
                        </div>
                    )
                })}
            </Div>
            <ButtonDefault onClick={onClickHandler}>Load more</ButtonDefault>
        </Section>
    )
}

const Section = styled.section`
display:flex;
flex-direction:column;
align-items:center;
height: 100%;
gap:20px;
padding:20px 0 33px;
);
`
const Div = styled.div`
display:flex;
margin:30px;
justify-content:center;
align-items:center;
gap:10px;
flex-wrap:wrap;
`
const Img = styled.img`
width:40%;`
export { PokeList }