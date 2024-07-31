import './App.css'
import { useCatImage } from "./Hooks/UseCatImage"
import { useCatFact } from './Hooks/UseCatFact'



export function App() {
    const {fact, refresFact} = useCatFact()
    const {imageUrl} = useCatImage({fact})

    const handLeClick = async () =>{
        refresFact()
    }

return(
    <main>
       <h1>App de gatitos</h1>
       <button onClick={handLeClick}>Get new fact</button>
       {fact && <p>{fact}</p>} 
       {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main> 
)
}