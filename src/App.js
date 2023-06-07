import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import GifsGrid from './components/gifs/GifsGrid'
import './App.css'

import Datetime from "react-datetime";


const App = () => {
    const [items, setItems] = useState([])
    const[windowWidth,setWindowWidth] = useState(window.innerWidth)
    const[windowHeight,setWindowHeight] = useState(window.innerHeight)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }
        window.addEventListener('resize',handleResize)
        const fetchItems = async () => {
            
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
            params: {
                api_key: "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe",
                limit: 20
            }
        });
        
        setItems(results.data.data)
        
        
        
        console.log(results)
    }
    
    fetchItems()
}, [])

const mystyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    display:"inline-block"
};
return (
    <>
    <div style={mystyle}>{windowWidth} x {windowHeight}</div>
    <div className='container'>
    <Header/>
    <GifsGrid items={items}/>
    
    </div>
    </>
    )
}

export default App