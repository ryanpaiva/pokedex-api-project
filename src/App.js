
import './App.css';
import { createGlobalStyle } from 'styled-components'
import { AppRouter } from './Pages/routes';
import { ThemeProvider } from './components/Context';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>

    </>
  )
}
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;   
    box-size:border-box;
    font-family: 'Roboto', sans-serif;
  }
`
export default App;
