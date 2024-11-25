import './App.css'
import React, { useState } from 'react';
import FormBusqueda from './components/formBusqueda';
import Movies from './components/Movies';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import MainPage from './components/MainPage';
import SingleMovie from './components/SingleMovie';

//https://www.omdbapi.com/?i=tt3896198&apikey=970f945d&s=troya
//https://www.omdbapi.com/?i=tt3896198&apikey=970f945d&i=tt11796304

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path ='/' element={<MainPage/>}/>
            <Route path = '/movies/:id' element = {<SingleMovie/>}/>
          </Routes>
        </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default App
