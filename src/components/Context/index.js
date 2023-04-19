import { useState } from "react";
import { createContext } from "react";

export const themes ={
    light:{
        background:'#e5e5e5',
        movesColor:"red",
        abilityColor:"red",
        card:"red"
    },
    dark:{
        movesColor:"#e2e",
        buttoncolor:"#e2e",
        abilityColor:"#e2e",
        background:'#3A3A3A',
        card:"#e2e",
    }
}
export const ThemeContext =createContext({})

export const ThemeProvider = (props)=>{
const [theme,setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}