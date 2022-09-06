import React, { Component } from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './Login'
import Register from './Register'
import Theme from './Theme';








export default class App extends Component {
  render() {
    return (
    <>
      
        <Routes>
        
        <Route path="/" element={<Login />}/>
        <Route path="/Signup" element={<Register/>}/>
        <Route path="/Signin" element={<Theme/>}/>
        </Routes>
     
      

        
    </>
       
        
      
    )
  }
}
