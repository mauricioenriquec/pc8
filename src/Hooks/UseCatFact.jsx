import { useState, useEffect } from "react"
import { getRandomFact } from "../Services/Fact"

export function useCatFact (){
    const [fact, setFac] = useState('Lorem ipsun cat fact whatever')
    
    const refresFact =() =>{

        getRandomFact().then(newFact => setFac(newFact))
    }

    useEffect(refresFact, [])

    return {fact, refresFact}
}