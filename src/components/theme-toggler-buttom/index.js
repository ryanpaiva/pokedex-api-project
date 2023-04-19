import React, { useContext } from "react"
import { ThemeContext, themes } from "../Context"
import { ButtonDefault } from "../Button"

const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <ButtonDefault onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} >change theme</ButtonDefault>
        </div>
    )
}
export { ThemeTogglerButton }