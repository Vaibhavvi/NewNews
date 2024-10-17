import './App.css';
import Navbar from './Component/Navbar';
import News from './Component/News';
import React, { Component } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route caseSensitive path='/health' element={<News key='home' pageSize={5} country="us" category="health"/>}></Route>
        <Route caseSensitive path='/' element={<News key='helth' pageSize={5} country="us" category="science"/>}></Route>
        <Route caseSensitive path='/technology' element={<News key='technology' pageSize={5} country="us" category="technology"/>}></Route>
        <Route caseSensitive path='/sport' element={<News key='sport' pageSize={5} country="us" category="sport"/>}></Route>
        <Route caseSensitive path='/business' element={<News key='business' pageSize={5} country="us" category="business"/>}></Route>
        <Route caseSensitive path='/science' element={<News key='science' pageSize={5} country="us" category="science"/>}></Route>
        <Route caseSensitive path='/entertanment' element={<News key='entertanment' pageSize={5} country="us" category="entertanment"/>}></Route>
        </Routes>  
      </BrowserRouter>
      </div>
    )
  }
}


